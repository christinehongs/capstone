import { bananas1kg } from "../data/bananas1kg.js";
import { milk1Liter } from "../data/milk.js";
import { domesticBeerHalfLiterBottle } from "../data/beer.js";
import { beefRound1kg } from "../data/beef.js";
import { chickenFillets1kg } from "../data/chicken.js";
import { bottleOfWineMidRange } from "../data/wine.js";
import { tomato1kg } from "../data/tomato.js";
import { importedBeerOneThirdLiterBottle } from "../data/importedBeer.js";
import { oranges1kg } from "../data/oranges.js";
import { lettuce1Head } from "../data/lettuce.js";
import { loafOfFreshWhiteBread500grams } from "../data/bread.js";
import { onion1kg } from "../data/onion.js";
import { riceWhite1kg } from "../data/rice.js";
import { potato1kg } from "../data/potato.js";
import { waterBottleOneAndHalfLiterBottle } from "../data/water-bottle.js";
import { eggsDozen } from "../data/eggs.js";
import { localCheese1kg } from "../data/cheese.js";
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
<<<<<<< Updated upstream
=======


 {
"USD": 1,
"AED": 3.6725,
"AFN": 103.3611,
"ALL": 106.2791,
"AMD": 481.9554,
"ANG": 1.79,
"AOA": 557.4855,
"ARS": 102.7033,
"AUD": 1.3842,
"AWG": 1.79,
"AZN": 1.6986,
"BAM": 1.7275,
"BBD": 2,
"BDT": 85.5514,
"BGN": 1.7275,
"BHD": 0.376,
"BIF": 1992.2461,
"BMD": 1,
"BND": 1.3514,
"BOB": 6.8701,
"BRL": 5.5858,
"BSD": 1,
"BTN": 74.342,
"BWP": 11.7557,
"BYN": 2.5606,
"BZD": 2,
"CAD": 1.2722,
"CDF": 1997.232,
"CHF": 0.9162,
"CLP": 849.7583,
"CNY": 6.3661,
"COP": 4047.2209,
"CRC": 640.3241,
"CUC": 1,
"CUP": 25,
"CVE": 97.391,
"CZK": 21.9635,
"DJF": 177.721,
"DKK": 6.5893,
"DOP": 57.0029,
"DZD": 139.0106,
"EGP": 15.7118,
"ERN": 15,
"ETB": 49.5589,
"EUR": 0.8832,
"FJD": 2.1194,
"FKP": 0.7413,
"FOK": 6.5893,
"GBP": 0.7413,
"GEL": 3.0891,
"GGP": 0.7413,
"GHS": 6.3856,
"GIP": 0.7413,
"GMD": 52.8328,
"GNF": 9451.0678,
"GTQ": 7.7037,
"GYD": 209.1288,
"HKD": 7.7978,
"HNL": 24.4292,
"HRK": 6.6548,
"HTG": 100.1434,
"HUF": 325.3559,
"IDR": 14257.7583,
"ILS": 3.1151,
"IMP": 0.7413,
"INR": 74.3424,
"IQD": 1458.9578,
"IRR": 41881.4061,
"ISK": 130.0389,
"JMD": 153.5757,
"JOD": 0.709,
"JPY": 115.2363,
"KES": 113.2952,
"KGS": 84.7896,
"KHR": 4069.3409,
"KID": 1.3842,
"KMF": 434.5281,
"KRW": 1193.1307,
"KWD": 0.2996,
"KYD": 0.8333,
"KZT": 434.3515,
"LAK": 11147.5303,
"LBP": 1507.5,
"LKR": 202.1846,
"LRD": 144.8686,
"LSL": 15.8123,
"LYD": 4.5939,
"MAD": 9.1484,
"MDL": 17.7662,
"MGA": 3059.404,
"MKD": 54.4534,
"MMK": 1774.118,
"MNT": 2864.5641,
"MOP": 8.0317,
"MRU": 36.3049,
"MUR": 43.56,
"MVR": 15.4131,
"MWK": 820.2759,
"MXN": 20.4994,
"MYR": 4.173,
"MZN": 63.9321,
"NAD": 15.8123,
"NGN": 410.8567,
"NIO": 35.2779,
"NOK": 8.8381,
"NPR": 118.9473,
"NZD": 1.4704,
"OMR": 0.3845,
"PAB": 1,
"PEN": 3.9883,
"PGK": 3.5088,
"PHP": 51.1922,
"PKR": 176.8059,
"PLN": 4.0511,
"PYG": 6938.9635,
"QAR": 3.64,
"RON": 4.3637,
"RSD": 103.4011,
"RUB": 74.4614,
"RWF": 1041.5164,
"SAR": 3.75,
"SBD": 7.9517,
"SCR": 13.218,
"SDG": 437.3178,
"SEK": 9.0866,
"SGD": 1.3515,
"SHP": 0.7413,
"SLL": 11346.5465,
"SOS": 578.2808,
"SRD": 21.2267,
"SSP": 425.2211,
"STN": 21.6395,
"SYP": 2524.3755,
"SZL": 15.8123,
"THB": 33.2603,
"TJS": 11.2711,
"TMT": 3.4997,
"TND": 2.8029,
"TOP": 2.2637,
"TRY": 13.144,
"TTD": 6.7749,
"TVD": 1.3842,
"TWD": 27.6255,
"TZS": 2306.6754,
"UAH": 27.2666,
"UGX": 3545.9963,
"UYU": 44.4507,
"UZS": 10705.5419,
"VES": 4.5833,
"VND": 22710.8117,
"VUV": 112.7699,
"WST": 2.5751,
"XAF": 579.3708,
"XCD": 2.7,
"XDR": 0.7132,
"XOF": 579.3708,
"XPF": 105.3994,
"YER": 250.2457,
"ZAR": 15.8131,
"ZMW": 16.7157
}
>>>>>>> Stashed changes
