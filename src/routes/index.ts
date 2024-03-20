import express, { Request, Response } from "express";
import Operations from "../Handlers";

const app = express();
app.use(express.json());
console.log("working !");


app.get("/", (req: Request, res: Response) =>  {
  res.status(200).json({
    msg: "api working !"
  })
})
app.post("/upload", Operations.uploadSnippet);
app.get("/allSubmissions", Operations.getCodes);

// app.listen(8080, () => {
//   console.log("you can start listening at http://127.0.0.1:8080");
// });

export default app;
