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

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Todo /> */}
          {/* <CoutDown /> */}
          {/* <Covid /> */}
        </header>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Covid />} />
            <Route path="/time" element={<CoutDown />} />
            {/* <Route path="invoices" element={<Invoices />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </BrowserRouter>
  );
}

export default App;
