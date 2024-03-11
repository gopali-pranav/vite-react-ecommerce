const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ordersRoutes = require("./routes/orderRoutes");
const cors = require("cors");

//Create Express app
const app = express();

//Middleware
app.use(bodyParser.json());

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://localhost:5176",
];
const corsOption = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOption));

//Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://gopalipranav4:GnTeI7GjZVkQwKDq@ordermanagement.a0kkpvc.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/orders", ordersRoutes);

app.get("/", async (req, res) => {
  res.send("Hello");
});

//Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
