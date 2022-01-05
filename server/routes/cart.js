import { db} from ('./config/firestore');
import lodash from 'lodash';

import express from 'express'
const cartRouter = express.Router();

cartRouter.get('/cart', async(req, res) => {
  const itemsRef = db.collection('items');
  

  // const list = itemsRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  // res.json(list)
  // console.log("hello")
  // res.send(list);
  // const mostExpensive = await itemsRef.where(`{name}`, '==', 'name').orderBy('price', 'asce').get()
  // const leastExpensive = await itemsRef.where(`{name}`, '==', 'name').orderBy('price', 'desc').get()
  // res.render(list);
  
});

// // input
// {
//     city: 'Medellin, Colombia',
//     items: [{ name: 'apples1kg', quantity: 2 }, { name: 'bananas1kg', quantity: 4 }],
// };

// output
// {
//     total: 12.99
// }
