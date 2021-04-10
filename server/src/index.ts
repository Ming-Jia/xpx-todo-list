import express from 'express';
import fs from 'fs';
import path from 'path';

import { addTodoToXpx } from './createTodoTransaction';

const app = express();
const JSON_FILE_LOCATION = path.join(__dirname, '..', 'data', 'todolist.json');

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

app.post('/create-todo', (req, res, next) => {
  let task = req.body;
  const taskRef = addTodoToXpx(task);

  // Get existing to-do-list
  let existingTodo = fs.readFileSync(JSON_FILE_LOCATION, 'utf8');
  existingTodo = JSON.parse(existingTodo);

  // Attach ref to the new to-do
  task['ref'] = taskRef;

  // Combine existing to-do-list with the new to-do
  const outputData = [task, ...existingTodo];

  // Output to the todolist.json
  fs.writeFileSync(JSON_FILE_LOCATION, JSON.stringify(outputData));

  res.json({ status: 'success' });
});

app.get('/todolist', (req, res, next) => {
  let rawdata = fs.readFileSync(JSON_FILE_LOCATION, 'utf8');
  let todolist = JSON.parse(rawdata);

  res.json(todolist);
});

app.listen(process.env.SERVER_PORT, () => {
  console.log('Server port number: ', process.env.SERVER_PORT);
});
