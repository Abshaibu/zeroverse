import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { BsLinkedin } from "react-icons/bs"
import { Logo } from "../../assets/svg";

const index = () => {
  return (
    <header className="container">
      <NavLink to="/"><img src={Logo} alt="zeroverse logo" /></NavLink>
      <div className={style["social-links"]}>
        <NavLink aria-label="twitter" to="/">
          <FaTwitter />
        </NavLink>
        <NavLink aria-label="instagram" to="/">
          <RiInstagramLine />
        </NavLink>
        <NavLink aria-label="linkedin" to="/">
          <BsLinkedin />
        </NavLink>
      </div>
    </header>
  );
};

export default index;
