import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';
import CreateTodoPage from './Page/CreateTodoPage';

const Routing: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create-todo" component={CreateTodoPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routing;
