import { useState, useEffect } from "react";
import Logo from "../assets/LogoAlt.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav({background}) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) setShow(false);
    else setShow(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav className={`${!show && 'hidden'} ${background && 'nav-background'}`}>
      <img src={Logo} className="white-fill"/>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Order</a>
        </li>
        {/* <li><a>Login</a></li> */}
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>
            <FaInstagram size={24} />
          </a>
        </li>
        <li>
          <a>
            <FaFacebookF size={24} />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
