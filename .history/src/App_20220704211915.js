import logo from "./logo.svg";
import "./App.css";
// Nav
import Nav from "./View/Nav/Nav";
//COvid
import Covid from "./View/Covid/Covid";
//CoutDown
import CoutDown from "./View/CoutDown/CoutDown";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <CoutDown />
        <Covid />
      </header>
    </div>
  );
}

export default App;
