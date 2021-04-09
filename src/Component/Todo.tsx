import './Todo.css';

const Todo: React.FC = () => {
  return (
    <div className="todo-container">
      <p className="todo-container__name">Create new project</p>
      <input type="checkbox" className="todo-container__status" />
    </div>
  );
};

export default Todo;
