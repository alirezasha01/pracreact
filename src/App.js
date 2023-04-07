import React from "react";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <div className="App">
      <Product name="shampoo" price="100000"/>
      <Product name="ketab" price="500000"/>
      <Product name="samavar" price="2900000"/>
      <h1>test</h1>
    </div>
  );
}

export default App;
