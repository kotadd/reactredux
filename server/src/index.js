import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
  res.send(renderer(req));

  // Some logic to initialize and load data into the store
  
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
