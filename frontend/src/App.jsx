import React from "react";
import { Route, Routes } from "react-router";
import Profile from "./components/Profile/Profile";
import State from "./hooks/State";
import Parent from "./components/Parent";
import Form from "./components/Form/Form";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Child from "./components/Child";
import Navbar from "./components/Navbar/Navbar";
import ProductDetails from "./components/ProductsDetails/ProductDetails";
import Products from "./components/Products/Products";

const App = () => {
  return (
    <>
   <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/child" element={<Child />} />
         <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        <Route
          path="/profile"
          element={<Profile ame="arun" skills={["html", "css"]} />}
        />
      </Routes>
    </>
  );
};

export default App;
