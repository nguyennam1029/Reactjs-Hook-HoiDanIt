import logo from "./logo.svg";
import "./App.css";
// Nav
import nav from "./View/Nav/Nav";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav />
      </header>
    </div>
  );
}

export default App;
