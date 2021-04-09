import { useState } from 'react';
import { Link } from 'react-router-dom';

import './CreateTodoPage.css';

const CreateTodoPage: React.FC = () => {
  const [taskName, setTaskName] = useState('');

  const createTodo = async () => {
    console.log('Task: ', taskName);
  };

  return (
    <div className="create-todo-layout">
      <h1 className="create-todo-layout__title">Create Todo</h1>
      <form className="create-todo-form">
        <div className="create-todo-task-name">
          <label htmlFor="taskName">Task Name: </label>
          <input
            type="text"
            name="taskName"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <Link to="/" className="create-todo-link">
          <div className="create-todo-button-container">
            <input
              className="create-todo-form__button create-button"
              type="button"
              value="CREATE"
              onClick={createTodo}
            />
            <input
              className="create-todo-form__button exit-button"
              type="button"
              value="EXIT"
            />
          </div>
        </Link>
      </form>
    </div>
  );
};

export default CreateTodoPage;
