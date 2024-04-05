import express from "express";
import connectToDb from "./connectToDb.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

import msgRouter from "./routes/message.route.js"

const port = 5000;
const app = express();

app.use(express.json());

const __dirname = path.resolve();


app.use("/api/msg", msgRouter);

// app.get("/",(req,res)=>{
//   res.send("kjsfdalf;");
// })

app.use(express.static(path.join(__dirname,"/frontend/dist")));
// app.use("*",path.join(__dirname, "frontend", "dist", "index.html"));


app.listen(port, async () => {
  await connectToDb();
  console.log("server is live 5000");
});
