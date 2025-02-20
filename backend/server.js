const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const axios = require("axios");

app.use(express.json());
app.use(cors());

app.get('/products',async (req, res) => {
   try {
    const response = await axios.get("https://fakestoreapi.com/products");
    res.json(response.data);
   }catch(error){
    console.error("Error fetching products:", error);
    res.status(400).json({ message: "bad request client sent invalid request"});
   }
  });


app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
  });
