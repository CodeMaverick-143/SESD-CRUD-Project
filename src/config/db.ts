import mongoose from "mongoose";
import { env } from "./env.js";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(env.MONGO_URI);
    console.log("Database Connected");

    mongoose.connection.on("error", (err) => {
      console.error(`Database connection err : ${err}`);
    });
  } catch (err) {
    console.error(`Database connection failed: ${err}`);

    process.exit(1);
  }
};

