import logo from "./logo.svg";
import "./App.css";
// Nav
import Nav from "./View/Nav/Nav";
//COvid
import covid from "./View/Covid/Covid";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <covid />
      </header>
    </div>
  );
}

export default App;
