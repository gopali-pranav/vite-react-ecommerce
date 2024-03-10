const express = require("express");
const router = express.Router();
const Order = require("../models/orders");

// Create order
const createOrder = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const { totalAmount, products } = req.body;
    const order = new Order({ totalAmount, products });
    const newOrder = await order.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

//View all orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
  }
};

// Delete order by ID
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteOrder = await Order.findByIdAndDelete(id);
    if (!deleteOrder) {
      return res.status(404).json({ error: "Order not found" });
    }
    res.json(deleteOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createOrder, getOrders, deleteOrder };
