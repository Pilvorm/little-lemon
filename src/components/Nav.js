import { useState, useEffect } from "react";
import Logo from "../assets/LogoAlt.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";

import "bootstrap/dist/css/bootstrap.min.css";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

// import { Link } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

function Nav({ background }) {
  const isMobileWidth = useMediaQuery({ query: "(max-width: 768px)" });
  const [show, setShow] = useState(true);
  const [offcanvas, setOffcanvas] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleOffcanvas = () => {
    setOffcanvas(!offcanvas);
  };

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
    <nav className={`${!show && "hidden"} ${background && "nav-background"}`}>
      <img alt="Little Lemon Logo" src={Logo} className="white-fill" />
      {isMobileWidth ? (
        <div>
          <button className="burger" onClick={toggleOffcanvas}>
            <RiMenu3Fill size={24} />
            <p>Menu</p>
          </button>
          <Offcanvas
            isOpen={offcanvas}
            toggle={toggleOffcanvas}
            direction="end"
          >
            <OffcanvasHeader closeButton>Offcanvas</OffcanvasHeader>
            <OffcanvasBody>
              <strong>This is the Offcanvas body.</strong>
            </OffcanvasBody>
          </Offcanvas>
        </div>
      ) : (
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Menu</button>
          </li>
          <li>
            <button>Reservations</button>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav;
