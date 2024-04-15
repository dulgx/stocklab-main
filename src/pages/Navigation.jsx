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
      <div className="nav-elements flex flex-row m-5">
        <div>
          <NavLink to="/">
            {" "}
            <img id="StocklabLogo" src={stocklabLogo} alt="stocklab-logo" />
          </NavLink>
        </div>

        <div>
          <ul className="nav-link-container">
            <li>
              <NavLink to="aboutus">Бидний тухай</NavLink>
            </li>
            <li>
              <NavLink to="/services">
                Үйлчилгээ <img src={down} alt="down" id="DownVector" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/news">Мэдээлэл</NavLink>
            </li>
            <li>
              <NavLink to="/instructions">Заавар</NavLink>
            </li>
          </ul>

          <div className="social-links">
            <a href="#">
              <img
                className="social-logo"
                src={facebookLogo}
                alt="facebook-logo"
              />
            </a>
            <a href="#">
              <img
                className="social-logo"
                src={instaLogo}
                alt="instagram-logo"
              />
            </a>
          </div>
          <button id="LoginButton">Нэвтрэх</button>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
