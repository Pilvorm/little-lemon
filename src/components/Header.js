import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";

function Header({refff}) {
  return (
    <header ref={refff}>
      <div className="title markazi">
        <h1>Little Lemon</h1>
        <a href="https://maps.app.goo.gl/E1Z3Hr9m5SsuQQZi6" target="_blank">Chicago <i><TfiLocationPin size={32}/></i></a>
      </div>
      <p>
        We are a family-owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <a className="reserve-btn">Reserve a table</a>
      <div className="socials">
        <a>
          <FaInstagram size={28} />
        </a>
        <a>
          <FaFacebookF size={28} />
        </a>
      </div>
    </header>
  );
}

export default Header;
