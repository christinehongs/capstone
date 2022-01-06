import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const pricesRouter = express.Router();
const client = new MongoClient(process.env.MONGODB_URI_ENDPOINT);
const database = client.db('capstone');
const items = database.collection('items');

pricesRouter.use(cors());
pricesRouter.use(bodyParser.json());
pricesRouter.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let selectedItem;

pricesRouter.post('/prices', (req, res) => {
  selectedItem = req.body;
});

pricesRouter.get('/prices', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  let itemsPriceData = null;

  async function findItems(client, item) {
    // console.log(itemName);
    const result = await client
      .db('capstone')
      .collection('items')
      .find({
        name: `${item.name}`,
        // city: `${selectedItem.city}`,
      })
      .limit(5)
      .toArray();
    if (result) {
      console.log('result:', result);
      return result;
    } else {
    }
  }

  // const allItems = await items.find();

  MongoClient.connect(client, async () => {
    try {
      await client.connect();

      console.log(selectedItem);
      if (selectedItem !== undefined) {
        await findItems(client, selectedItem).then((res) => {
          itemsPriceData = res;
          console.log('items price data:', itemsPriceData[0]);
        });
        // for (let i = 0; i < allItems.length; i++) {
        //   await findItems(client)
        //     .then((res) => {
        //       console.log(res);
        //       itemsPriceData = res;
        //     })
        //     .catch((err) => {
        //       console.log(err);
        //     });
        // }
        res.json(itemsPriceData);
      } else {
        console.log('no items');
        res.end();
      }

      // console.log(itemsPriceData);
    } catch (e) {
      console.error(e);
    }
  });
});

export default pricesRouter;
