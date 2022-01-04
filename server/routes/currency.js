import { db } from './config/firestore';
import lodash from 'lodash';

const express = require('express');
const router = express.Router();

const KEY = '03c4279c1831eb95aba13645';



router.get('/currencies', (_, res) => {



  res.send(allCurrencies);
});