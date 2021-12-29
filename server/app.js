const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/groceryPrices')
    .then(() => console.log('connected to mongo database'))
    .catch(err => console.error('Could not connect to mongo database', err))

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

