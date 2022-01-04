import lodash from 'lodash';
import { db } from '../config/firestore.js';

import { bananas1kg } from '../data/bananas1kg.js';
import { milk1Liter } from '../data/milk.js';
import { domesticBeerHalfLiterBottle } from '../data/domesticBeer.js';
import { beefRound1kg } from '../data/beefRound.js';
import { chickenFillets1kg } from '../data/chickenFillets.js';
import { bottleOfWineMidRange } from '../data/bottleOfWine.js';
import { tomato1kg } from '../data/tomato.js';
import { importedBeerOneThirdLiterBottle } from '../data/importedBeer.js';
import { oranges1kg } from '../data/oranges.js';
import { lettuce1Head } from '../data/lettuce.js';
import { loafOfFreshWhiteBread500grams } from '../data/loafOfFreshWhiteBread.js';
import { onion1kg } from '../data/onion.js';
import { riceWhite1kg } from '../data/rice.js';
import { potato1kg } from '../data/potato.js';
import { waterBottleOneAndHalfLiterBottle } from '../data/waterBottle.js';
import { eggsDozen } from '../data/eggs.js';
import { localCheese1kg } from '../data/localCheese.js';
import { apples1kg } from '../data/apples1kg.js';

const itemsObj = {
  bananas1kg,
  milk1Liter,
  domesticBeerHalfLiterBottle,
  beefRound1kg,
  chickenFillets1kg,
  bottleOfWineMidRange,
  tomato1kg,
  importedBeerOneThirdLiterBottle,
  oranges1kg,
  lettuce1Head,
  loafOfFreshWhiteBread500grams,
  onion1kg,
  riceWhite1kg,
  potato1kg,
  waterBottleOneAndHalfLiterBottle,
  eggsDozen,
  localCheese1kg,
  apples1kg,
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

