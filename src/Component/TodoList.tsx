import Todo from './Todo';

import './TodoList.css';

const TodoList: React.FC = () => {
  return (
    <div className="todo-list-container">
      <Todo />
      <Todo />
    </div>
  );
};

export default TodoList;
