const app = require("./app");
const serverless = require("serverless-http");
require("dotenv").config();

if (process.env.NODE_ENV === "development") {
  process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  });

  const server = app.listen(9000, () => {
    console.log(`Server running on ${9000}`);
  });
  process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
      process.exit(1);
    });
  });
}

module.exports.handler = serverless(app);
