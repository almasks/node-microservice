const dotEnv = require("dotenv");

dotEnv.config();

module.exports={
   DB_URL: process.env.DB_URL
}