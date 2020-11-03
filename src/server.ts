import "reflect-metadata";

import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import routes from "./routes";
import uploadConfig from "./config/upload";
import GlobalError from "./errors/GlobalErrors";

import "./database";

const app = express();

app.use(express.json());
app.use("/files", express.static(uploadConfig.directory));
app.use(routes);

app.use(GlobalError);

app.listen(3333, () => {
  console.log("🚀 Server started on port 3333");
});
