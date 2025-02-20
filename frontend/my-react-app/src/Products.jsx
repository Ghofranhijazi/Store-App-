import { useState, useEffect } from 'react'
import axios from "axios";


function Products() {
 const [Products, setProducts] = useState([]);

 useEffect(() => {
  axios
    .get("http://localhost:4000/products")
    .then((response) => {
      setProducts(response.data); 
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}, []);

  return (
    <>
       <h1>🛒 Products List</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
       
        {Products.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", textAlign: "center" }}>
            <img src={product.image} alt={product.title} style={{ width: "100px", height: "100px" }} />
            <h3>{product.title}</h3>
            <p>💲 Price : ${product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Products;
