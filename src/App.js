import "./App.css";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import RowView from "./components/RowView/RowView";
import ColumnView from "./components/ColumnView/ColumnView";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// export const ToggleContext = createContext();

function App() {
  // const [show, setShow] = useState(true);

  return (   
    <Router>
      <Switch>
        <Route exact path="/">
          <RowView />
        </Route>
        <Route path="/home">
          <RowView />
        </Route>
        <Route path="/column">
          <ColumnView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
