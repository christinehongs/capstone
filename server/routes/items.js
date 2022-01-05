import lodash from 'lodash';
import express from 'express';

import { Item } from '../models/item.js';

const itemsRouter = express.Router();

itemsRouter.get('/items', async (_, res) => {
  const allItems = await Item.find();
  const itemsWithDups = allItems.map((item) => item.name);

  const allItemNames = lodash
    .chain(itemsWithDups)
    .uniq()
    .orderBy((city) => city.toLowerCase())
    .value();

  res.send(allItemNames);
});

export default itemsRouter;