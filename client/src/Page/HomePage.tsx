import TodoList from '../Component/TodoList';
import CreateTodoButton from '../Component/CreateTodoButton';

import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="main-layout">
      <h1 className="main-layout__title">To-do-List</h1>
      <div className="main-layout__content">
        <TodoList />
        <CreateTodoButton />
      </div>
    </div>
  );
};

export default HomePage;
