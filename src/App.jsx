import React from "react";
import "./index.css"; // Create this CSS file in the same folder as the component
import ImageHoverComponent from "./components/ImageHoverComponent.jsx";
import Product from "./pages/Product";
import TopNav from "./components/TopNav";

const App = () => {
  return (
    <div>
      <TopNav />
      <Product />
    </div>
  );
};

export default App;
