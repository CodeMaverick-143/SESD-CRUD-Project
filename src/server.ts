import app from "./app.js";
import { connectDB } from "./config/db.js";
import { env } from "./config/env.js";

const server = async (): Promise<void> => {
  try {
    await connectDB();

    app.listen(env.PORT, () => {
      console.log("Server Running at:", env.PORT);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};


server();
