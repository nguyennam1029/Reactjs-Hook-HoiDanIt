import "../Nav/Nav.scss";
import { useState } from "react";
import Todo from "./Todo/Todo";
const Nav = () => {
  let [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [todos, setTodos] = useState([
    { id: "abs", name: "Nguyễn Văn Nam" },
    { id: "abs", name: "Nguyễn Văn Nam" },
    { id: "abs", name: "Nguyễn Văn Nam" },
  ]);
  const handleClick = () => {
    // setName(address);
    let newTodo = { id: "a", name: address };
    setTodos([...todos, newTodo]);
    setAddress("");
  };
  const handleOnchange = (e) => {
    // console.log(e.target.value);
    setAddress(e.target.value);
  };

  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <h1>My name {name}</h1>
      <Todo todos={todos} test={"wdf"} />
      <input type="text" value={address} onChange={(e) => handleOnchange(e)} />
      <button type="button" onClick={() => handleClick()}>
        Click me
      </button>
    </>
  );
};
export default Nav;
