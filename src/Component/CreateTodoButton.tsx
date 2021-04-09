import './CreateTodoButton.css';

const CreateTodoButton: React.FC = () => {
  return (
    <div className="create-todo-button-container">
      <input
        type="button"
        className="create-todo-button-container__button"
        name="button"
        value=" + "
      />
    </div>
  );
};

export default CreateTodoButton;
