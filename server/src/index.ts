import express from 'express';
import cors from 'cors';

import todoRoute from './routes/todolist';

const app = express();

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(todoRoute);

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server port number:', process.env.SERVER_PORT);
});
