import { db } from './config/firestore';
import lodash from 'lodash';

const express = require('express');
const router = express.Router();

router.get('/groceryQuestion', (req, res) => {
    const itemsRef = db.collection('items')
    const 
});

