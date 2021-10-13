import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Project_1 from './projects/project_1/Project_1';
import Project_10 from './projects/project_10/Project_10';
import Project_11 from './projects/project_11/Project_11';
import Project_12 from './projects/project_12/Project_12';
import Project_13 from './projects/project_13/Project_13';
import Project_14 from './projects/project_14/Project_14';
import Project_15 from './projects/project_15/Project_15';
import Project_2 from './projects/project_2/Project_2';
import Project_3 from './projects/project_3/Project_3';
import Project_4 from './projects/project_4/Project_4';
import Project_4_success from './projects/project_4/Project_4_success';
import Project_5 from './projects/project_5/Project_5';
import Project_6 from './projects/project_6/Project_6';
import Project_7 from './projects/project_7/Project_7';
import Project_8 from './projects/project_8/Project_8';
import Project_9 from './projects/project_9/Project_9';
import HomeScreen from './screens/home/HomeScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/project/15" component={Project_15} />
        <Route path="/project/14" component={Project_14} />
        <Route path="/project/13" component={Project_13} />
        <Route path="/project/12" component={Project_12} />
        <Route path="/project/11" component={Project_11} />
        <Route path="/project/10" component={Project_10} />
        <Route path="/project/9" component={Project_9} />
        <Route path="/project/8" component={Project_8} />
        <Route path="/project/7" component={Project_7} />
        <Route path="/project/6" component={Project_6} />
        <Route path="/project/5" component={Project_5} />
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
