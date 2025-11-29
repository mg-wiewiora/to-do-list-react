import Tasks from "./features/tasks/TasksPage";
import Task from "./features/tasks/TasksPage";
import Author from "./features/tasks/TasksPage";

import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { toAuthor, toTasks, toTask } from "./routes";
import Navigation from "./Navigation";

const App = () => (
  <HashRouter>
   <Navigation />

    <Switch>
      <Route path={toTask()}>
        <Task />
      </Route>
      <Route path={toTasks()}>
        <Tasks />
      </Route>
      <Route path={toAuthor()}>
        <Author />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
