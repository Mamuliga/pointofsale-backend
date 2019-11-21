import express from "express";
import config from "./config";
import apiRoutes from "./controllers";
import dbConnect from "./middleware/dbConnect";

const app = express();

// Initialize Sequelize instant
app.use(dbConnect);

// Enable the json body request
app.use(express.json());

// home route
app.get("/", (req, res) => {
  res.status(200).json({
    app: config.APP_NAME,
    version: config.APP_VERSION
  });
});

app.use("/api", apiRoutes);

app.listen(config.PORT, () =>
  console.log(`APP is running on http://localhost:${config.PORT}/`)
);
