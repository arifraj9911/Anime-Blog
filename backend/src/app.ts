import express, { Application } from "express";
import router from "./app/routes";
import notFoundRoute from "./app/middleware/notFoundRoute";
const app: Application = express();

// middleware
app.use(express.json());

// routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

// not found route
app.use(notFoundRoute);

export default app;
