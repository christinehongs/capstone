import lodash from 'lodash';

import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
// import { Item } from '../models/item.js';

const itemsRouter = express.Router();

const client = new MongoClient(process.env.MONGODB_URI_ENDPOINT);

const database = client.db('capstone');
const items = database.collection('items');

// MongoClient.connect(client, async () => {
//   // assert.equal(null, err);
//   try {
//     await client.connect();
//
//     // await listDatabases(client);
//     const allItems = await items.find();
//     const itemsWithDups = allItems.map((item) => item.name);
//
//     const allItemNames = lodash
//       .chain(itemsWithDups)
//       .uniq()
//       .orderBy((city) => city.toLowerCase())
//       .value();
//
//     console.log(allItemNames.length);
//   } catch (e) {
//     console.error(e);
//   }
// });

// itemsRouter.get('/items', async (_, res) => {
//   const allItems = await items.find();
//   const itemsWithDups = allItems.map((item) => item.name);
//
//   const allItemNames = lodash
//     .chain(itemsWithDups)
//     .uniq()
//     .orderBy((city) => city.toLowerCase())
//     .value();
//
//   res.send(allItemNames);
// });

export default itemsRouter;
