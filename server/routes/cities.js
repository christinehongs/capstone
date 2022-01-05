import lodash from 'lodash';
import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URI_ENDPOINT);
const citiesRouter = express.Router();

async function findItems(client) {
  const result = await client
    .db('capstone')
    .collection('items')
    .find({})
    .toArray();
  if (result) {
    return result;
  } else {
  }
}

citiesRouter.get('/cities', async (_, res) => {
  // const allItems = await items.find();
  // const citiesWithDups = allItems.map((item) => item.city);
  //
  // const allCities = lodash
  //   .chain(citiesWithDups)
  //   ._uniq()
  //   .orderBy((city) => city.toLowerCase())
  //   .value();
  //
  // console.log(allCities.length);
  // res.send(allCities);

  // let citiesList = [];

  MongoClient.connect(client, async () => {
    try {
      await client.connect();

      const allItems = await findItems(client);
      // console.log(allItems.length);
      const citiesWithDupes = allItems.map((item) => item.city);

      const allCities = lodash
        .chain(citiesWithDupes)
        .uniq()
        .orderBy((city) => city.toLowerCase())
        .value();

      // console.log(allCities);
      res.json(allCities);
    } catch (e) {
      console.error(e);
    }
  });
});

export default citiesRouter;
