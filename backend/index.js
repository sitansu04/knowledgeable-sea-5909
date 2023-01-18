const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./config/db.js");
const { userRouter } = require("./routes/user.routes.js");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

app.get("/", async (req, res) => {
  res.send({ msg: "API STARTED" });
});

app.listen(process.env.port, async (req, res) => {
  try {
    await connection;
    console.log("connected to db");
    console.log(`Connection Established at ${process.env.port}`);
  } catch (error) {
    console.log({ msg: "error in connextion to DB" });
    console.log(error);
  }
});
