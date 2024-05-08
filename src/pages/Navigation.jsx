import stocklabLogo from "../assets/stocklab-logo.png";
import facebookLogo from "../assets/logo-fb-simple-2.png";
import instaLogo from "../assets/logo-instagram-2.png";
import down from "../assets/vector-1.svg";

import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const navbarShow = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav>
      <div className="nav-elements flex flex-row w-full py-5 justify-between lg:grid lg:place-items-center">
        <div className=" ">
          <NavLink to="/">
            {" "}
            <img src={stocklabLogo} alt="stocklab-logo" className=" w-40" />
          </NavLink>
        </div>

        <div className=" lg:hidden gap-5 justify-center content-center">
          <ul className=" text-white flex items-center">
            <li className=" mx-5">
              <NavLink to="aboutus" key={1}>
                <span className="text-sm">Бидний тухай</span>
              </NavLink>
            </li>
            <li className=" mx-5">
              <NavLink to="/services" key={2}>
                <span className="text-sm">Үйлчилгээ</span>
              </NavLink>
            </li>
            <li className=" mx-5">
              <NavLink to="/news" className="text-sm key={3}">
                <span className="text-sm">Мэдээлэл</span>
              </NavLink>
            </li>
            <li className=" mx-5">
              <NavLink to="/instructions" key={4}>
                <span className="text-sm">Заавар</span>
              </NavLink>
            </li>
          </ul>

          <div className="flex justify-center items-center">
            <a href="#" className="mx-1">
              <img
                className="social-logo"
                src={facebookLogo}
                alt="facebook-logo"
              />
            </a>
            <a href="#" className="mx-1">
              <img
                className="social-logo"
                src={instaLogo}
                alt="instagram-logo"
              />
            </a>
          </div>
          <button className="text-white text-sm border-2  border-green-400 px-5 rounded-xl">
            Нэвтрэх
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
