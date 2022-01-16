import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import {useState} from "react";
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
    <NavBar></NavBar>
    <Routes>
      <Route
        path="/"
        element={<Main />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer></Footer>

  </BrowserRouter>
  );
}

export default App;
