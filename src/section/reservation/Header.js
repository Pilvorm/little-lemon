import Logo from "../../assets/LogoAlt.png";

function Header({ refer }) {
  return (
    <header id="reservation-header" ref={refer}>
      <img alt="Little Lemon Logo" src={Logo} className="logo" />
    </header>
  );
}

export default Header;
