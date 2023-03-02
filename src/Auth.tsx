import React from "react";
import {Routes, Route} from 'react-router-dom'
import Header from "./components/header/Header";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

const Auth = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default Auth;
