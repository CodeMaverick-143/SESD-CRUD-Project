import App from "./app.js";
import { env } from "./config/env.js";

const app = new App(env.PORT);

app.listen();
