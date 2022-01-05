import { MongoClient } from 'mongodb';

import { bananas } from '../data/bananas.js';
import { milk } from '../data/milk.js';
import { beer } from '../data/beer.js';
import { beef } from '../data/beef.js';
import { chicken } from '../data/chicken.js';
import { wine } from '../data/wine.js';
import { tomato } from '../data/tomato.js';
import { oranges } from '../data/oranges.js';
import { lettuce } from '../data/lettuce.js';
import { bread } from '../data/bread.js';
import { onion } from '../data/onion.js';
import { rice } from '../data/rice.js';
import { potato } from '../data/potato.js';
import { waterBottle } from '../data/water-bottle.js';
import { eggs } from '../data/eggs.js';
import { cheese } from '../data/cheese.js';
import { apples } from '../data/apples.js';

const itemsObj = {
  bananas,
  milk,
  beer,
  beef,
  chicken,
  wine,
  tomato,
  oranges,
  lettuce,
  bread,
  onion,
  rice,
  potato,
  waterBottle,
  eggs,
  cheese,
  apples,
};

const uri =
  'mongodb+srv://capstone:capstone@cluster0.4s9zk.mongodb.net/capstone';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('capstone');
    const items = database.collection('items');

    // create an array of documents to insert
    const allItems = [];

    for (const [itemName, itemList] of Object.entries(itemsObj)) {
      itemList.forEach((itemDetails) => {
        allItems.push({
          name: itemName,
          city: itemDetails.city,
          price: itemDetails.price,
          rank: itemDetails.rank,
        });
      });
    }

    const result = await items.insertMany(allItems);
    console.log(`${result.insertedCount} documents were inserted`);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
