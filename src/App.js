import * as React from "react";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import Home from "./Pages/Home";
import Buyprods from "./Pages/Buyprods";
import Merchant from "./Pages/Mechstore";
import Store from "./Pages/Merchstore Pages/Store";
import Addproduct from "./Pages/Addproduct";
import Products from "./Pages/Merchstore Pages/Products";
import Prodinfo from "./Pages/Prodinfo";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import { useLocation } from "react-router-dom";

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
        <Route path="/buyprods" element={<Buyprods />} />
        <Route path="/prodinfo" element={<Prodinfo />} />
        <Route path="/merchant/" element={<Merchant />}>
          <Route path="store" element={<Store />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="/addproducts" element={<Addproduct />} />
      </Routes>
    </div>
  );
}

export default App;
