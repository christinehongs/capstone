import { bananas1kg } from "../data/bananas1kg.js";
import { milk1Liter } from "../data/milk.js";
import { domesticBeerHalfLiterBottle } from "../data/domesticBeer.js";
import { beefRound1kg } from "../data/beefRound.js";
import { chickenFillets1kg } from "../data/chickenFillets.js";
import { bottleOfWineMidRange } from "../data/bottleOfWine.js";
import { tomato1kg } from "../data/tomato.js";
import { importedBeerOneThirdLiterBottle } from "../data/importedBeer.js";
import { oranges1kg } from "../data/oranges.js";
import { lettuce1Head } from "../data/lettuce.js";
import { loafOfFreshWhiteBread500grams } from "../data/loafOfFreshWhiteBread.js";
import { onion1kg } from "../data/onion.js";
import { riceWhite1kg } from "../data/rice.js";
import { potato1kg } from "../data/potato.js";
import { waterBottleOneAndHalfLiterBottle } from "../data/waterBottle.js";
import { eggsDozen } from "../data/eggs.js";
import { localCheese1kg } from "../data/localCheese.js";
import { apples1kg } from "../data/apples1kg.js";
import fs from "fs";

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

// const exampleObj = {
//   bananas1kg: [
//     {
//       city: "Hamilton, Bermuda",
//       price: 6.39,
//     },
//     {
//       city: "Honolulu, HI",
//       price: 4.03,
//     },
//   ],
//   milk1Liter: [
//     {
//       city: "Hamilton, Bermuda",
//       price: 4.6,
//     },
//     {
//       city: "Honolulu, HI",
//       price: 1.79,
//     },
//   ],
// };

// const citiesObj = {};
const allItems = [];
//
for (const [itemName, itemList] of Object.entries(itemsObj)) {
  //   allItems.push(itemsObj);

  //   for (let i = 0; itemList.length < 10; i++) {
  //     if (citiesObj[itemList[i].city] == null) {
  //       citiesObj[itemList[i].city] = {
  //         id: i,
  //         name: itemList[i].city,
  //         items: [],
  //       };
  //     }

  //     // citiesObj[itemList[i].city].items.push({
  //     //   name: itemName,
  //     //   price: itemList[i].price,
  //     //   rank: itemList[i].rank,
  //     // });
  //   }

  itemList.forEach((itemDetails, index) => {
    allItems.push({
      name: itemName,
      city: itemDetails.city,
      price: itemDetails.price,
      rank: itemDetails.rank,
    });

    // if (citiesObj[itemDetails.city] == null) {
    //   citiesObj[itemDetails.city] = {
    //     name: itemDetails.city,
    //     items: [],
    //   };
    // }

    // citiesObj[itemDetails.city].items.push({
    //   name: itemName,
    //   price: itemDetails.price,
    //   rank: itemDetails.rank,
    // });
  });

  // console.log(citiesObj)
  // const citiesArray = []

  // for (const [_, cityDetails] of Object.entries(citiesObj)) {
  //     citiesArray.push(cityDetails)
  // }
  // console.log(citiesArray.length)
  // console.log(allItems)
}

allItems.forEach((item) => {
  await db.collection("items").add(item);
});

//   const jsonItems = JSON.stringify(allItems);

//   fs.writeFile("items-1.json", jsonItems, "utf8", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
