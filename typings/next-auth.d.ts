import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Prisma from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: Prisma.User;
  }
}
