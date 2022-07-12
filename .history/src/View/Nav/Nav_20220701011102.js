import "../Nav/Nav.scss";
const Nav = () => {
  const handleClick = (e) => {
    console.log("click me>>", e.target.value);
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
      <button
        type="button"
        value="Click me"
        onClick={(e) => handleClick(e)}
      ></button>
    </>
  );
};
export default Nav;
