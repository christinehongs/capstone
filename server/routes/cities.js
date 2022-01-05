import lodash from 'lodash';
import express from 'express';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI_ENDPOINT);

const database = client.db('capstone');
const items = database.collection('items');

const citiesRouter = express.Router();

citiesRouter.get('/cities', async (_, res) => {
  const allItems = await items.find();
  const citiesWithDups = allItems.map((item) => item.city);

  const allCities = lodash
    .chain(citiesWithDups)
    .uniq()
    .orderBy((city) => city.toLowerCase())
    .value();

  console.log(allCities.length);
  res.send(allCities);
});

export default citiesRouter;
