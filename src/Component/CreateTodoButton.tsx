import { Link } from 'react-router-dom';

import './CreateTodoButton.css';

const CreateTodoButton: React.FC = () => {
  return (
    <div className="create-todo-button-container">
      <Link to="/create-todo">
        <input
          type="button"
          className="create-todo-button-container__button"
          name="button"
          value=" + "
        />
      </Link>
    </div>
  );
};

export default CreateTodoButton;
