import { useState, useEffect } from "react";
import { Offcanvas } from "reactstrap";
import Logo from "../assets/LogoAlt.png";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { RiMenu3Fill, RiCloseLargeFill } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
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
      <Link to={`/`}>
        <img alt="Little Lemon Logo" src={Logo} className="logo" />
      </Link>
      {isMobileWidth ? (
        <>
          <button className="burger" onClick={toggleOffcanvas}>
            <RiMenu3Fill size={24} />
            <p>Menu</p>
          </button>
          <Offcanvas
            isOpen={offcanvas}
            toggle={toggleOffcanvas}
            direction="end"
          >
            <div className="offcanvas-header">
              <Link to={`/`}>
                <img alt="Little Lemon Logo" src={Logo} className="logo" />
              </Link>
              <button className="burger" onClick={toggleOffcanvas}>
                <RiCloseLargeFill size={24} />
                <p>Close</p>
              </button>
            </div>
            <div className="offcanvas-body">
              <div className="offcanvas-nav">
                <Link to={`/`}>Home</Link>
                <Link to={"/#about"}>About</Link>
                <button>Menu</button>
                <Link to={`reservation/`}>Reservations</Link>
                <div className="offcanvas-socials">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF size={24} />
                  </a>
                </div>
              </div>
            </div>
          </Offcanvas>
        </>
      ) : (
        <div className="nav-links">
          <Link to={`/`}>Home</Link>
          <Link to={"/#about"}>About</Link>
          <button>Menu</button>
          <Link to={`/reservation`}>Reservations</Link>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookF size={24} />
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
