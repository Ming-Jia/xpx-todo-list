import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Page/HomePage';


const Routing: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routing;
