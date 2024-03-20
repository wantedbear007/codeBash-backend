import { PrismaClient } from "@prisma/client";
import Operations from "./Handlers";
import express, { Request, Response } from "express";

export const prismaInstance: PrismaClient = new PrismaClient();

const app = express();
app.use(express.json());
console.log("working !");

const port = process.env.PORT || 8000;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    msg: "api working !",
  });
});
app.post("/upload", Operations.uploadSnippet);
app.get("/allSubmissions", Operations.getCodes);

// async function startServices(): Promise<void> {
//   try {
//     await prismaInstance.$connect();
//   } catch (err: any) {
//     console.log("error occurred \n", err);
//     process.exit(1);
//   } finally {
//     console.log("database is connected !");
//     // startServices();
//     // Routes.startServices();
//     prismaInstance.$disconnect();
//   }
// }

app.listen(port, () => {
  return console.log(`start listening at port ${port}`);
});

// startServices();

export default app;
