import "../Nav/Nav.scss";
import { useState } from "react";
const Nav = () => {
  const [name, setName] = useState("Nam");
  console.log(name);
  const handleOnchange = (e) => {
    console.log(e.target.value);
  };
  const handleClick = () => {
    console.log("click me>>");
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
      <input type="text" onChange={(e) => handleOnchange(e)} />
      <button type="button" onClick={() => handleClick()}>
        Click me
      </button>
    </>
  );
};
export default Nav;
