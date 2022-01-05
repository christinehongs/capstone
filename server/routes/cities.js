import { Item } from '../models/item.js';
import lodash from 'lodash';
import express from 'express';

const citiesRouter = express.Router();

citiesRouter.get('/cities', async (req, res) => {
  const allItems = await Item.find();
  const citiesWithDups = allItems.map(item => item.city)

  const allCities = lodash.chain(citiesWithDups)
    .uniq()
    .orderBy(city => city.toLowerCase())
    .value()

  res.send(allCities)
});
export default citiesRouter;
