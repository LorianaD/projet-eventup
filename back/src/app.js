import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/index.js";
import notFound from "./middlewares/notFound.js";

const app = express();

// middlewares globaux
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// fichiers statiques
app.use("/uploads", express.static("uploads"));

// route test
app.get("/", (req, res) => {
  res.json({
    message: "the site Eventup is running"
  });
});

// routes API
app.use("/api", router);

app.use(notFound);

app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json({
    error: "Erreur serveur",
    details: err.message
  });
});

export default app;