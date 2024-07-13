import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatWebsite">What is GPT?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="modernReact__nav">
      <div className="modernReact__nav-links">
        <div className="modernReact__nav-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="modernReact__nav-links_container">
          <Menu />
        </div>
      </div>
      <div className="modernReact__nav-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="modernReact__nav-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="modernReact__nav-menu_container scale-up-center">
            <div className="modernReact__nav-menu_container-links">
              <Menu />
              <div className="modernReact__nav-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
