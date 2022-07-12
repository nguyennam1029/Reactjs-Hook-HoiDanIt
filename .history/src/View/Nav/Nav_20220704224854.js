import "../Nav/Nav.scss";
// import { useState } from "react";
// import Todo from "./Todo/Todo";
import { NavLink } from "react-router-dom";
const Nav = () => {
  // let [name, setName] = useState("");
  // const [address, setAddress] = useState("");
  // const [todos, setTodos] = useState([
  //   { id: "abs", name: "Nguyễn Văn Nam" },
  //   { id: "abs", name: "Nguyễn Văn Nam" },
  //   { id: "abs", name: "Nguyễn Văn Nam" },
  // ]);
  // const handleClick = () => {
  //   // setName(address);
  //   let newTodo = { id: Math.floor(Math.random() * 10000), name: address };
  //   setTodos([...todos, newTodo]);
  //   setAddress("");
  // };
  // const handleOnchange = (e) => {
  //   // console.log(e.target.value);
  //   setAddress(e.target.value);
  // };
  // const handleDelete = (id) => {
  //   let currentTodos = todos;
  //   currentTodos = currentTodos.filter((item) => item.id !== id);
  //   setTodos(currentTodos);
  // };
  return (
    <>
      <div className="topnav">
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
        {/* <NavLink to="/todoApp" activeClassName="active">
          Todo app
        </NavLink> */}
        <NavLink to="/coutDown" activeClassName="active">
          CoutDown
        </NavLink>
        {/* <NavLink to="/About" activeClassName="active">
          About
        </NavLink> */}
      </div>
      {/* <h1>My name {name}</h1> */}
      {/* <Todo todos={todos} test={"wdf"} handleDelete={handleDelete} />
      <input type="text" value={address} onChange={(e) => handleOnchange(e)} />
      <button type="button" onClick={() => handleClick()}>
        Click me
      </button> */}
    </>
  );
};
export default Nav;
