require('dotenv').config();
require('express-async-errors');

const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');
const productRouter = require('./Routes/Products');
const notFound = require('./middleware/notFound')
const errorHandler = require('./middleware/errorHandler')
const app = express();


app.use(express.json());
app.use(cors());
app.use('/api/v1/products', productRouter);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

const start = async () =>{
  try{ 
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}`));
  } catch (err) {
    console.log(err);
  }
}

start();