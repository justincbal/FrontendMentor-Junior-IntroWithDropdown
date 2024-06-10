import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <a href="#" className="logo">
          snap
        </a>

        <div className="MenuIcon">
          <img
            className="Menu"
            src="/src/assets/images/icon-menu.svg"
            alt="Menu Icon"
          />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#" className="test">Features</a>
              <a href="#">Company</a>
              <a href="#">Careers</a>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
