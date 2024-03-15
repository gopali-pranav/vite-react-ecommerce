const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create user
const createUser = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const { username, email, password } = req.body;
    const users = new User({ username, email, password });
    const newUser = await users.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error", message: error.message });
  }
};

//View all users
const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
  }
};

// Delete user by ID
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(deleteUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { createUser, getUser, deleteUser };
