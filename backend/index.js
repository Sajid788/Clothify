require("dotenv").config();
const express = require("express");

const { connection } = require("./config/db");
const { userRouter } = require("./routes/user_routes");
const { adminRouter } = require('./routes/admin_routes');

const app = express();
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the home page!");
});

// Routes
app.use("/user", userRouter);
app.use('/admin', adminRouter);

// Not found route
app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection();
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at ${process.env.PORT}`);
});
