export async function findItems(client) {
  const result = await client
    .db('capstone')
    .collection('items')
    .find({})
    .toArray();
  if (result) {
    return result;
  } else {
  }
}

export function handleRequest(req, res) {
  console.log('\n-- INCOMING REQUEST AT ' + new Date().toISOString());
  console.log(req.method + ' ' + req.url);
  console.log(req.body);
  // res.send('Hello World!');
  // res.end();
  res.status(204).send();
}
