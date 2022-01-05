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

async function findItems(client) {
  const result = await client
    .db('capstone')
    .collection('items')
    .find({})
    .toArray();
  if (result) {
    return result;
  } else {
  }
}

function handleRequest(req, res) {
  console.log('\n-- INCOMING REQUEST AT ' + new Date().toISOString());
  console.log(req.method + ' ' + req.url);
  console.log(req.body);
  // res.send('Hello World!');
  // res.end();
  res.status(204).send();
}

cartRouter.post('/cart', (req, res) => {
  let cartItems = req.body;
  console.log(cartItems);
  // handleRequest(req, res);
});

cartRouter.get('/cart', async (req, res) => {
  const allItems = await items.find();

  MongoClient.connect(client, async () => {
    try {
      await client.connect();
      const allItems = await findItems(client);
      // console.log(allItems.length);

      console.log(allItems);
      // console.log(allCities);
    } catch (e) {
      console.error(e);
    }
  });
});

export default cartRouter;

// export default function () {
//   router.route('/cart').post((req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//   });
//
//   return router;
// }

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
