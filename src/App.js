import Tasks from "./features/tasks/TasksPage";
import Task from "./features/tasks/TaskPage";
import Author from "./features/author/AuthorPage";

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
      <Route>
        <Redirect to={toTasks()} />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
