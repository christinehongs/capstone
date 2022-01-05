import lodash from 'lodash';
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI_ENDPOINT);

const database = client.db('capstone');
const items = database.collection('items');

const citiesRouter = express.Router();

MongoClient.connect(client, async () => {
  // assert.equal(null, err);
  try {
    await client.connect();

    // await listDatabases(client);

    const allItems = await items.find();
    // console.log(allItems.length);
    const citiesWithDups = allItems.map((item) => item.city);

    const allCities = lodash
      .chain(citiesWithDups)
      .uniq()
      .orderBy((city) => city.toLowerCase())
      .value();

    // console.log(allCities.length);
    // res.send(allCities);
  } catch (e) {
    console.error(e);
  }
});

// citiesRouter.get('/cities', async (_, res) => {
//   const allItems = await items.find();
//   const citiesWithDups = allItems.map((item) => item.city);
//
//   const allCities = lodash
//     .chain(citiesWithDups)
//     ._uniq()
//     .orderBy((city) => city.toLowerCase())
//     .value();
//
//   console.log(allCities.length);
//   res.send(allCities);
// });

export default citiesRouter;
