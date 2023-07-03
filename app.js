const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db");
require("dotenv").config();
// const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-PINGOTHER"
  );
  res.header("Access-Control-Allow-Credentials", true);
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
  );
  next();
});

app.use(
  cors({
    origin: ["http://localhost:5173/"],
    methods: ["GET", "POST", "PATCH"],
    credentials: true,
  })
);
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

const path = require("path");
const userRouter = require("./routers/userRouter");

app.use("/upc/api/v1", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"))
  );
}

module.exports = app;
