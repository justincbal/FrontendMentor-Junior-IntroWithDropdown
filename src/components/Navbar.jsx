import "../styles/Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [featOpen, setFeat] = useState(false);
  const [compOpen, setComp] = useState(false);

  const handleClose = () => {
    const mobileMenu = document.querySelector(".mobileMenu");
    const darkLayer = document.querySelector('.darkLayer');
    darkLayer.style.display = 'none';
    mobileMenu.style.display = "none";
    
  };

  const openMenu = () => {
    const mobileMenu = document.querySelector(".mobileMenu");
    const darkLayer = document.querySelector('.darkLayer');
    darkLayer.style.display = 'block';
    mobileMenu.style.display = "flex";
  };

  const openCloseFeat = () => {
    const featSubNav = document.querySelector(".featSubNav");
    const featArrow = document.querySelector(".featArrow");

    if (!featOpen) {
      featSubNav.style.display = "block";
      featArrow.classList.add("arrowAnimation");
      setFeat(true);
    } else {
      featSubNav.style.display = "none";
      featArrow.classList.remove("arrowAnimation");
      setFeat(false);
    }
  };

  const openCloseComp = () => {
    const compSubNav = document.querySelector(".compSubNav");
    const compArrow = document.querySelector(".compArrow");

    if (!compOpen) {
      compSubNav.style.display = "block";
      compArrow.classList.add("arrowAnimation");
      setComp(true);
    } else {
      compSubNav.style.display = "none";
      compArrow.classList.remove("arrowAnimation");
      setComp(false);
    }
  };

  return (
    <>
      <div className="darkLayer">
      </div>
      <header>
        <a href="#" className="logo">
          snap
        </a>

        <div className="MenuIcon" onClick={() => openMenu()}>
          <img
            className="Menu"
            src="/src/assets/images/icon-menu.svg"
            alt="Menu Icon"
          />
        </div>
        <nav className="mobileMenu">
          <div className="closeMenu" onClick={() => handleClose()}>
            <img src="/src/assets/images/icon-close-menu.svg" alt="" />
          </div>
          <ul className="mainNav">
            <div className="feat item">
              <a href="#" onClick={() => openCloseFeat()}>
                Features
                <img
                  className="featArrow arrow"
                  src="/src/assets/images/icon-arrow-down.svg"
                  alt=""
                />
              </a>
              <ul className="featSubNav">
                <li className="featItem">
                  <img src="/src/assets/images/icon-todo.svg" alt="" />
                  <a href="#">Todo List</a>
                </li>
                <li className="featItem">
                  <img src="/src/assets/images/icon-calendar.svg" alt="" />
                  <a href="#">Calendar</a>
                </li>
                <li className="featItem">
                  <img src="/src/assets/images/icon-reminders.svg" alt="" />
                  <a href="#">Reminders</a>
                </li>
                <li className="featItem">
                  <img src="/src/assets/images/icon-planning.svg" alt="" />
                  <a href="#">Planning</a>
                </li>
              </ul>
            </div>
            <div className="comp item">
              <a href="#" onClick={() => openCloseComp()}>
                Company
                <img
                  className="compArrow arrow"
                  src="/src/assets/images/icon-arrow-down.svg"
                  alt=""
                />
              </a>
              <ul className="compSubNav">
                <li className="item">
                  <a href="#">History </a>
                </li>
                <li className="item">
                  <a href="#">Our Team</a>
                </li>
                <li className="item">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <li className="item">
              <a href="#">Careers</a>
            </li>
            <li className="item">
              <a href="#">About</a>
            </li>
            <div className="buttons">
            <button className="loginButton">Login</button>
            <button>Register</button>
          </div>
          </ul>
          
        </nav>
      </header>
    </>
  );
};

export default Navbar;
