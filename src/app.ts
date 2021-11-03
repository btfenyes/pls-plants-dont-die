import express from 'express';
import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';
import routes from './routes/routes';

const app = express();

app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(routes);

mongoose.connect('mongodb+srv://admin:adminpass@pls-plants-dont-die.xf5i7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then((_) => {  
  app.listen(5000, () => {
    console.log('Server running');
  });
})
.catch((err) => {
  console.log(err);
});