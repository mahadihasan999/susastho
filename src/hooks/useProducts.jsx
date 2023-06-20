import { useEffect, useState } from "react";
const useProducts = (url) => {
  const [products, setProducts] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
  useEffect(() => {
    const url = "https://susasto.malihatabassum.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error);
        setProducts(data.products);
        setloading(false);
      });
  }, [url]);
  return { products, setProducts, loading, error };
};
export default useProducts;
