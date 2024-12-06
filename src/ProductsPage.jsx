import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  function handleIndex() {
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <ProductsNew />
      <ProductsIndex products={products} />
    </main>
  );
}
