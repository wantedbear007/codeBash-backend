import { PrismaClient } from "@prisma/client";
import app from "./routes";

// user defined
import Routes from "./routes";

export const prismaInstance: PrismaClient = new PrismaClient();

async function startServices(): Promise<void> {
  try {
    await prismaInstance.$connect();
  } catch (err: any) {
    console.log("error occurred \n", err);
    process.exit(1);
  } finally {
    console.log("database is connected !");
    // startServices();
    // Routes.startServices();
    prismaInstance.$disconnect();
  }
}

startServices();

export default app;
