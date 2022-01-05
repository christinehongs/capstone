import express from 'express';

// import { connectDb } from './config/mongoose';
import { MongoClient } from 'mongodb';
import citiesRouter from './routes/cities';
import itemsRouter from './routes/items';
import cartRouter from './routes/items';
import dotenv from 'dotenv';

dotenv.config();

const uriEndpoint = new MongoClient(process.env.MONGODB_URI_ENDPOINT);
// const database = uriEndpoint.db('capstone');
// const items = database.collection('items');

async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db('capstone')
    .collection('items')
    .findOne({ name: nameOfListing });
  if (result) {
    console.log(
      `Found a listing in the collection with the name '${nameOfListing}':`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

async function findItems(client) {
  const result = await client
    .db('capstone')
    .collection('items')
    .find({})
    // .limit()
    .toArray();
  if (result) {
    console
      .log
      // `Found a listing in the collection with the name '${nameOfListing}':`
      ();
    console.log(result);
  } else {
    // console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

MongoClient.connect(uriEndpoint, async () => {
  try {
    await uriEndpoint.connect();
    // await findOneListingByName(uriEndpoint, 'apples');
    await findItems(uriEndpoint);
  } catch (e) {
    console.error(e);
  }
});

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(citiesRouter);
app.use(itemsRouter);
app.use(cartRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBKw-CREroCPA7Kt_I0S9lHR9DaESR3l5U",
//   authDomain: "capstone-9aef8.firebaseapp.com",
//   projectId: "capstone-9aef8",
//   storageBucket: "capstone-9aef8.appspot.com",
//   messagingSenderId: "35193949082",
//   appId: "1:35193949082:web:4c42cefc2c0f7479910823",
//   measurementId: "G-D16JW37G9D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
