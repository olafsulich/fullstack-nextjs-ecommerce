import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient | null;

export const initPrisma = () => {
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return prisma;
};
