// ordersRoutes.js

const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
  deleteOrder,
} = require("../orderController/orderController");

// Create a new order
router.post("/", createOrder);

// View all orders
router.get("/", getOrders);

// Delete an order by ID
router.delete("/:id", deleteOrder);

module.exports = router;
