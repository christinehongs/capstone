// connecting to firestore database
// const db = require('./config/firestore');
const express = require('express');
const app = express();
const groceryPrices = require('./routes/groceryPrices');
const cities = require('./routes/cities')

// const cities = require('./routes/cities')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./routes/groceryPrices'));
// const itemsRef = db.collection('items');
// const queryRef = itemsRef.where('state', '==', 'CA');

// app.use

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});