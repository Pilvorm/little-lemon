import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Header({ refer }) {
  return (
    <header id="homepage-header" ref={refer}>
      <div className="title">
        <h1 className="markazi">Little Lemon</h1>
        <a
          className="special-elite"
          href="https://maps.app.goo.gl/E1Z3Hr9m5SsuQQZi6"
          target="_blank"
          rel="noreferrer"
        >
          <p>Chicago</p>
          <TfiLocationPin size={36} />
        </a>
      </div>
      <p className="header-description">
        A family-owned Mediterranean restaurant, focused on traditional recipes
        served with a modern twist.
      </p>
      <Link to={'reservation/'} className="reserve-btn">Reserve a table</Link>
      <div className="socials">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebookF size={24} />
        </a>
      </div>
    </header>
  );
}

export default Header;
