import './App.css';
import { useState } from 'react';
import { useInView } from "react-intersection-observer";
import React, { lazy, Suspense } from "react";
import Nav from './components/Nav';
import Header from './components/Header';
// import Main from './components/Main';
import Footer from './components/Footer';

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
