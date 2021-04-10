import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';
import TodoInterface from '../../../interface/TodoInterface';

import './TodoList.css';

const TodoList: React.FC = () => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    loadTodoList();
  }, []);

  const loadTodoList = async () => {
    const res = await axios.get('http://localhost:5000/todolist');

    setTodoList(res.data);
  };

  return (
    <div className="todo-list-container">
      {todoList.map((curTodo: TodoInterface) => {
        console.log(curTodo);
        return (
          <Todo
            key={curTodo.refNo}
            taskName={curTodo.taskName}
            isComplete={curTodo.isComplete}
            refNo={curTodo.refNo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
