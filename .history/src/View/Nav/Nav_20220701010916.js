import "../Nav/Nav.scss";
const Nav = () => {
  const handleClick = () => {
    console.log("click me");
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
      <button type="button" onClick={this.handleClick()}>
        Click me
      </button>
    </>
  );
};
export default Nav;
