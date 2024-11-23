import express, { Express, Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("WORKS");
});

app.listen(3010, () => {
  console.log("App Working!");
});
