import express from 'express';

const app = express();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server port number: ', process.env.SERVER_PORT);
});
