// ordersRoutes.js

const express = require("express");
const router = express.Router();
const {
  createUser,
  getUser,
  deleteUser,
} = require("../orderController/userController");

//Create a new user
router.post("/", createUser);

// View all orders
router.get("/", getUser);

// Delete an order by ID
router.delete("/:id", deleteUser);

module.exports = router;
