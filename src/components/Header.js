import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";

function Header({ refer }) {
  return (
    <header ref={refer}>
      <div className="title">
        <h1 className="markazi">Little Lemon</h1>
        <a
          href="https://maps.app.goo.gl/E1Z3Hr9m5SsuQQZi6"
          target="_blank"
          className="special-elite"
        >
          Chicago{" "}
          <i>
            <TfiLocationPin size={32} />
          </i>
        </a>
      </div>
      <p>
        A family-owned Mediterranean restaurant, focused on traditional recipes
        served with a modern twist.
      </p>
      <a className="reserve-btn">Reserve a table</a>
      <ul className="socials">
        <li>
          <a>
            <FaInstagram size={28} />
          </a>
        </li>
        <li>
          <a>
            <FaFacebookF size={28} />
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
