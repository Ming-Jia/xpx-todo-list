import { useState, useEffect } from 'react';
import axios from 'axios';
import Todo from './Todo';

import './TodoList.css';

interface TodoInterface {
  taskName: string;
  isComplete: boolean;
  ref: string;
}

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
            key={curTodo.ref}
            todoName={curTodo.taskName}
            isComplete={curTodo.isComplete}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
