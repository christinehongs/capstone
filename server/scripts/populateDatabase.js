import lodash from 'lodash';
import { db } from '../config/firestore.js';

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

const allItems = [];

for (const [itemName, itemList] of Object.entries(itemsObj)) {
  itemList.forEach((itemDetails, index) => {
    allItems.push({
      name: itemName,
      city: itemDetails.city,
      price: itemDetails.price,
      rank: itemDetails.rank,
    });
  });
}

(async () => {
  let batch = db.batch();
  let count = 0;

  for (let index = 0; index < allItems.length; index++) {
    count = index + 1;
    const item = allItems[index];
    const itemId = `${item.name}-${lodash.camelCase(item.city)}`;

    const itemRef = db.collection('items').doc(itemId);
    batch.set(itemRef, item);

    if (count % 500 === 0) {
      console.log(`Batching ${count}`);
      await batch.commit();
      batch = db.batch();
    }
  }

  console.log(`Batching ${count}`);
  await batch.commit();
})();
