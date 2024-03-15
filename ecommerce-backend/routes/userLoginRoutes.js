// ordersRoutes.js

const express = require("express");
const router = express.Router();

const { userLogin } = require("../orderController/loginController");

router.post("/login", userLogin);

module.exports = router;
