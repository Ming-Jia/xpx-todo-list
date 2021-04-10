import express from 'express';
import fs from 'fs';
import path from 'path';

import { addTodoToXpx } from '../createTodoTransaction';

const router = express.Router();

const JSON_FILE_LOCATION = path.join(
  __dirname,
  '..',
  '..',
  'data',
  'todolist.json'
);

router.get('/todolist', (req, res, next) => {
  const rawdata = fs.readFileSync(JSON_FILE_LOCATION, 'utf8');
  const todolist = JSON.parse(rawdata);

  res.json(todolist);
});

router.post('/create-todo', (req, res, next) => {
  console.log('stage: create-todo');

  let task = req.body;
  const taskRef = addTodoToXpx(task);

  // Get existing to-do-list
  let existingTodo = fs.readFileSync(JSON_FILE_LOCATION, 'utf8');
  existingTodo = JSON.parse(existingTodo);

  // Attach ref to the new to-do
  task['ref'] = taskRef;

  // Combine existing to-do-list with the new to-do
  const outputData = [...existingTodo, task];

  // Output to the todolist.json
  fs.writeFileSync(JSON_FILE_LOCATION, JSON.stringify(outputData));

  res.json({ status: 'success' });
});

export default router;
