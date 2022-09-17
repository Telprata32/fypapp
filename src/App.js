import * as React from "react";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import THobbies from "./Pages/Toyhobbies";
import Prodinfo from "./Pages/Prodinfo";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  return (
    <div>
      {location.pathname != "/" && location.pathname != "/registration" && (
        <NavBar />
      )}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/toyshobbies" element={<THobbies />} />
        <Route path="/prodinfo" element={<Prodinfo />} />
      </Routes>
    </div>
  );
}

export default App;
