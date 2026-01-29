import dotenv from "dotenv";
dotenv.config();
const requiredEnvVars = ["PORT", "MONGO_URI", "JWT_SECRET"];
requiredEnvVars.forEach((key) => {
    if (!process.env[key]) {
        throw new Error(`Value missing in the env: ${key}`);
    }
});
export const env = {
    PORT: Number(process.env.PORT),
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    NODE_ENV: process.env.NODE_ENV || "development"
};
