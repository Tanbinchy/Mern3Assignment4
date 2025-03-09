const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Create Product
router.post("/", async (req, res) => {
  try {
    // Check if all required fields are present (Optional)
    const { name, price, category, stock } = req.body;
    if (!name || !price || !category || !stock) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.log("Adding failed...");
    res.status(400).json({ error: err.message });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
});

// Get Single Product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: "Invalid product ID" });
  }
});

// Update Product
router.put("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(400).json({ error: "Invalid product ID" });
  }
});

module.exports = router;
