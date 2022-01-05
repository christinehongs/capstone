import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();
const itemsRouter = express.Router();
const client = new MongoClient(process.env.MONGODB_URI_ENDPOINT);
const database = client.db('capstone');
const items = database.collection('items');

itemsRouter.use(cors());
itemsRouter.use(bodyParser.json());
itemsRouter.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let selectedCity;

itemsRouter.post('/items', (req, res) => {
  selectedCity = req.body;
});

itemsRouter.get('/items', async (req, res) => {
  let itemsPriceData = null;

  console.log(selectedCity && `selected city: ${selectedCity.city}`);

  async function findItems(client) {
    // console.log(itemName);
    const result = await client
      .db('capstone')
      .collection('items')
      .find({
        // name: `${itemName}`,
        city: `${selectedCity.city}`,
      })
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

      if (selectedCity !== undefined) {
        console.log('selected city:', selectedCity);
        await findItems(client).then((res) => {
          itemsPriceData = res;
          console.log('items price data:', itemsPriceData);
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

export default itemsRouter;
