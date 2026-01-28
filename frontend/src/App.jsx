import React, { createContext } from "react";
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
import Reducer from "./hooks/Reducer";

export const userContext = createContext()

const App = () => {
  const userData = { user: "arun" };
  
  return (
    <>
   <Navbar />
   <userContext.Provider value={userData}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<Form />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/child" element={<Child />} />
         <Route path="/products" element={<Products />} />
           <Route path="/state" element={<State />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/reducer" element={<Reducer />} />
        <Route
          path="/profile"
          element={<Profile skills={["html", "css"]} />}
        />
      </Routes>
      </userContext.Provider>
    </>
  );
};

export default App;
