import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const cartRouter = express.Router();
const client = new MongoClient(process.env.MONGODB_URI_ENDPOINT);
const database = client.db('capstone');
const items = database.collection('items');

cartRouter.use(cors());
cartRouter.use(bodyParser.json());
cartRouter.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let cartItems;

cartRouter.post('/cart', (req, res) => {
  cartItems = req.body;
  // console.log(cartItems);
});

cartRouter.get('/cart', async (req, res) => {
  let cartPriceData = null;

  async function findItems(client, itemName) {
    console.log(itemName);
    const result = await client
      .db('capstone')
      .collection('items')
      .find({
        name: `${itemName}`,
      })
      .toArray();
    if (result) {
      // console.log(result);
      return result;
    } else {
    }
  }

  // const allItems = await items.find();

  MongoClient.connect(client, async () => {
    try {
      await client.connect();
      if (cartItems !== undefined) {
        for (let i = 0; i < cartItems.length; i++) {
          await findItems(client, cartItems[i].item)
            .then((res) => {
              cartPriceData = res;
              console.log(cartPriceData);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        res.json(cartPriceData);
      } else {
        console.log('cart empty');
        res.end();
      }

      // console.log(cartPriceData);
    } catch (e) {
      console.error(e);
    }
  });
});

export default cartRouter;

// // input
// const cartData = {
//   {
//     city: 'Colombia',
//     item: 'apples',
//   }
// };

// output
// {
//     total: 12.99
// }
