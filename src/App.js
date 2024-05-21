import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";


function App({ children, navBackground }) {
  return (
    <>
      <Nav background={!navBackground} />
      {children}
      <Footer />
    </>
  );
}

export default App;
