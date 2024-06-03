import { app } from "./routes/server.js";
import { PORT,HOST } from "./utils/config_env.js";
app.listen(PORT, HOST, () =>
  console.log(`running on port ${PORT} and HOST ${HOST}`)
);