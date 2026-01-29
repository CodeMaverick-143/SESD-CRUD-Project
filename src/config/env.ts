import dotenv from "dotenv";

dotenv.config();

class EnvConfig {
  public readonly PORT: number;
  public readonly MONGO_URI: string;
  public readonly JWT_SECRET: string;
  public readonly NODE_ENV: string;

  constructor() {
    this.validate();
    this.PORT = Number(process.env.PORT);
    this.MONGO_URI = process.env.MONGO_URI as string;
    this.JWT_SECRET = process.env.JWT_SECRET as string;
    this.NODE_ENV = process.env.NODE_ENV || "development";
  }

  private validate(): void {
    const requiredEnvVars = ["PORT", "MONGO_URI", "JWT_SECRET"] as const;
    requiredEnvVars.forEach((key) => {
      if (!process.env[key]) {
        throw new Error(`Value missing in the env: ${key}`);
      }
    });
  }
}

export const env = new EnvConfig();
