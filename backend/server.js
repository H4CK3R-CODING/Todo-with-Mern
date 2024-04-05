import express from "express";
import connectToDb from "./connectToDb.js";
import dotenv from "dotenv"

dotenv.config();

import msgRouter from "./routes/message.route.js"

const port = 5000;
const app = express();

app.use(express.json());


app.use("/api/msg", msgRouter);

app.get("/",(req,res)=>{
  res.send("kjsfdalf;");
})


app.listen(port, async () => {
  await connectToDb();
  console.log("server is live 5000");
});
