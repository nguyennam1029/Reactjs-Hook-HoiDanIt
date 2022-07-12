import logo from "./logo.svg";
import "./App.css";
// Nav
import Nav from "./View/Nav/Nav";
//COvid
import Covid from "./View/Covid/Covid";
//TodoApp
// import Todo from "./Todo/Todo";
//CoutDown
import CoutDown from "./View/CoutDown/CoutDown";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Todo /> */}
          {/* <CoutDown /> */}
          {/* <Covid /> */}
        </header>

        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          {/* <Route path="/todoApp">
            <Todo />
          </Route> */}
          <Route path="/time">
            <CoutDown />
          </Route>
          {/* <Route path="/About">
            <CoutDown />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
