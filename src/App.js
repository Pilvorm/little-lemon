import './App.css';
import { useInView } from "react-intersection-observer";
import React, { lazy } from "react";
import Nav from './components/Nav';
import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = lazy(() => import('./components/Main'));

function App() {
  const { ref: myRef, inView: isVisible } = useInView({
    threshold: 0.1,
  });

  return (
    <>
      <Nav background={!isVisible}/>
      <Header refer={myRef}/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
