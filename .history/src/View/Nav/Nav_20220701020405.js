import "../Nav/Nav.scss";
import { useState } from "react";
const Nav = () => {
  const handleClick = (e) => {
    console.log("click me>>", e.target.value);
  };
  const [name, setName] = [setName("Nam")];
  console.log(name);
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
      <input type="text" />
      <button type="button" onClick={(e) => handleClick(e)}>
        Click me
      </button>
    </>
  );
};
export default Nav;
