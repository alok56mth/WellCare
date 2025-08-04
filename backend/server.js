import { config } from "dotenv";

// Load environment variables FIRST, before any other imports
config({ path: "./config/config.env" });

import app from "./app.js";
import cloudinary from "cloudinary";
import { dbConnection } from "./database/dbConnection.js";

//Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connected to database 
dbConnection();

app.listen(process.env.PORT, () => {
  console.log(`Server running On Port ${process.env.PORT}`);
});
