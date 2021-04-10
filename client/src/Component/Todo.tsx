import { useState } from 'react';

import './Todo.css';

import TodoInterface from '../../../interface/TodoInterface'

const Todo: React.FC<TodoInterface> = ({ taskName, isComplete }) => {
  const [isChecked, setIsChecked] = useState(isComplete);

  const updateTodoStatus = () => {
    console.log('update the status');
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsChecked(!isChecked);

    // Post a new request to server
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
