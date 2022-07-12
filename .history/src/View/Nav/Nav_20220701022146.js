import "../Nav/Nav.scss";
import { useState } from "react";
const Nav = () => {
  let [name, setName] = useState("");
  let [address, setAddress] = useState("");
  console.log(name);
  const handleOnchange = (e) => {
    setAddress(e.target.value);
    console.log(address);
  };
  const handleClick = () => {
    // setName(name);
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
      <input type="text" value={name} onChange={(e) => handleOnchange(e)} />
      <button type="button" onClick={() => handleClick()}>
        Click me
      </button>
    </>
  );
};
export default Nav;
