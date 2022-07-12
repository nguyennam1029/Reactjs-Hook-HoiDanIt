import "../Nav/Nav.scss";
const Nav = () => {
  const handleClick = (e) => {
    console.log("click me", e.target.value);
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
      <button type="button" onClick={(e) => handleClick(e)}>
        Click me
      </button>
    </>
  );
};
export default Nav;
