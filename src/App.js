import * as React from "react";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import THobbies from "./Pages/Toyhobbies";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/toyshobbies" element={<THobbies />} />
      </Routes>
    </div>
  );
}

export default App;
