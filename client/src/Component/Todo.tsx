import { useState } from 'react';
import axios from 'axios';

import './Todo.css';

import TodoInterface from '../../../interface/TodoInterface';

const Todo: React.FC<TodoInterface> = ({ taskName, isComplete, refNo }) => {
  const [isChecked, setIsChecked] = useState(isComplete);

  const updateTodoStatus = async () => {
    const res = await axios.post('http://localhost:5000/update-todo', {
      taskName,
      isComplete: !isChecked,
      refNo,
    });

    console.log('Status:', res.status);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    setIsChecked(!isChecked);

    updateTodoStatus();
  };

  return (
    <div className="todo-container">
      <p className="todo-container__name">{taskName}</p>
      <input
        type="checkbox"
        className="todo-container__status"
        checked={isChecked}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Todo;
