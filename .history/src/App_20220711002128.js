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
//Blogs app
import Blog from "./View/Blog/Blog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetail from "./View/Blog/Detail";
import Notfound from "./View/Notfound";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Routes>
          <Route path="/" element={<Covid />} />
          <Route path="time" element={<CoutDown />} />
          <Route path="blog" element={<Blog />}></Route>
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
