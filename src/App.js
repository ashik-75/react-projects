import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from './components/loader/Loader';
import Project_1 from './projects/project_1/Project_1';
import Project_2 from './projects/project_2/Project_2';
import Project_3 from './projects/project_3/Project_3';
import Project_4 from './projects/project_4/Project_4';
import Project_4_success from './projects/project_4/Project_4_success';
import HomeScreen from './screens/home/HomeScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/project/4/success" component={Project_4_success} />
        <Route path="/project/4" component={Project_4} />
        <Route path="/project/3" component={Project_3} />
        <Route path="/project/2" component={Project_2} />
        <Route path="/project/1" component={Project_1} />
        <Route path="/" component={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default App;
