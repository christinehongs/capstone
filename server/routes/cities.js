import { db } from './config/firestore';
import lodash from 'lodash';

const express = require('express');
const router = express.Router();

router.get('/cities', (_, res) => {
  const allItems = db.collection('items').get()

  const citiesWithDups = allItems.map(item => item.city)

  const allCities = lodash.chain(citiesWithDups)
    .uniq()
    .orderBy(city => city.toLowerCase())
    .value()

  res.send(allCities)
})

module.exports = router;