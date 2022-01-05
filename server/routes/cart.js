import express from 'express';
import { MongoClient } from 'mongodb';

const cartRouter = express.Router();

const client = new MongoClient(process.env.MONGODB_URI_ENDPOINT);

const database = client.db('capstone');
const items = database.collection('items');

cartRouter.get('/cart', async (req, res) => {
  const allItems = await items.find();

  console.log(allItems);
});

/*

const cartData = {
  {
    city: 'Colombia',
    item: 'apples',
  }
};

// cartData.city = 'Medellin, Colombia'
console.log(cartData.items.find((name === 'apples')))
  { name: 'apples', quantity: 2 }
 

 */

// // input
// {
//     city: 'Medellin, Colombia',
//     items: [{ name: 'apples1kg', quantity: 2 }, { name: 'bananas1kg', quantity: 4 }],
// };

// output
// {
//     total: 12.99
// }
