import { db } from './config/firestore';
import lodash from 'lodash';

const express = require('express');
const router = express.Router();


router.get('/items', (_, res) => {
  const allItems = db.collection('items').get();

  const itemsWithDups = allItems.map((item) => item.name);

  const allItems = lodash
    .chain(itemsWithDups)
    .uniq()
    .orderBy((city) => city.toLowerCase())
    .value();

  res.send(allItems);
});