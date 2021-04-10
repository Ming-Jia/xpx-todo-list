import express from 'express';
import fs from 'fs';
import path from 'path';

import { addTodoToXpx } from '../createTodoTransaction';
import TodoInterface from '../../../interface/TodoInterface';

const router = express.Router();

const JSON_FILE_LOCATION = path.join(
  __dirname,
  '..',
  '..',
  'data',
  'todolist.json'
);

router.get('/todolist', (req, res, next) => {
  console.log('stage: get-todo-list');

  const rawdata = fs.readFileSync(JSON_FILE_LOCATION, 'utf8');
  const todolist = JSON.parse(rawdata);

  res.json(todolist);
});

router.post('/create-todo', (req, res, next) => {
  console.log('stage: create-todo');

  let task = req.body;
  const taskRef = addTodoToXpx(JSON.stringify(task));

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

router.post('/update-todo', (req, res, next) => {
  console.log('stage: update-todo');

  let task = req.body;
  console.log('first task', task);
  const taskRef = addTodoToXpx(JSON.stringify(task));

  // Get existing to-do-list
  const existingTodo = fs.readFileSync(JSON_FILE_LOCATION, 'utf8');
  const existingTodoJSON: [TodoInterface] = JSON.parse(existingTodo);
  const filtedExistingTodoJSON = existingTodoJSON.filter(
    (t) => t.refNo != task.refNo
  );

  // Attach ref to the new to-do
  task['refNo'] = taskRef;

  // Combine existing to-do-list with the new to-do

  const outputData = task.isComplete
    ? [...filtedExistingTodoJSON, task]
    : [task, ...filtedExistingTodoJSON];

  console.log('task', outputData);

  // Output to the todolist.json
  fs.writeFileSync(JSON_FILE_LOCATION, JSON.stringify(outputData));

  res.json({ status: 'success' });
});

export default router;
