const sha256 = require("js-sha256");
const dotenv = require("dotenv");
const path = require('path')

// Load environment variables from the new .env file
dotenv.config({ path: path.join(__dirname, "api_keys.env") });

module.exports = function (req, res, next) {
  const apiKey = process.env.API_KEY;

  console.log("API Key from Environment:", apiKey);
  console.log("Authorization Header:", req.headers.authorization);
  if (!apiKey) {
    return next(new Error("NO Api Key set"));
  }

  if (sha256(apiKey) === req.headers.authorization) {
    next();
  } else {
    let error = new Error("Unauthorized.");
    next(error);
  }
};
