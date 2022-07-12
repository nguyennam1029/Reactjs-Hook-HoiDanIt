import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Nav
import Nav from "./View/Nav/Nav";
//COvid
import Covid from "./View/Covid/Covid";
//TodoApp
import Todo from "./View/Nav/Todo/Todo";
//CoutDown
import CoutDown from "./View/CoutDown/CoutDown";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <CoutDown /> */}
          {/* <Covid /> */}
        </header>

        <Switch>
          <Route path="/" exact>
            <Covid />
          </Route>
          <Route path="/todoApp">
            <Todo />
          </Route>
          <Route path="/coutDown">
            <CoutDown />
          </Route>
          <Route path="/About">
            <CoutDown />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
