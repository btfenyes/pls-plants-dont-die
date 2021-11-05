import express from 'express';
import mongoose from 'mongoose';
import { urlencoded } from 'body-parser';
import dotenv from 'dotenv';
import routes from './routes/routes';

dotenv.config();

const app = express();

app.use(urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use(routes);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@pls-plants-dont-die.xf5i7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then((_) => {  
  app.listen(process.env.PORT, () => {
    console.log('Server running');
  });
})
.catch((err) => {
  console.log(err);
});