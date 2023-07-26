const express = require("express");
const cors = require("cors");
const app = express();
require("./config/db");
require("dotenv").config();
// const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization,  X-PINGOTHER"
//   );
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS"
//   );
//   next();
// });


// app.use(
//   cors({
//     origin: ["http://localhost:5173","https://upc-inc-web.vercel.app","https://frontend--tranquil-beignet-fe781b.netlify.app"],
//     methods: ["GET", "POST", "PATCH", "DELETE"],
//     credentials: 'include',
//     optionsSuccessStatus:200
//   })
// );

const allowedOrigins = ['http://localhost:5173', 'https://upc-inc-web.vercel.app', 'https://frontend--tranquil-beignet-fe781b.netlify.app'];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    credentials: true, // Allow including cookies in cross-origin requests
    exposedHeaders: ['Access-Control-Allow-Credentials'],
  })
);


app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));





if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "config/config.env" });
}

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
