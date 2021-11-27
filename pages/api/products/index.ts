import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();

  const products = await prisma.product.findMany();

  if (products && products.length > 0) {
    res.status(200).json(products);
    res.end();
  } else {
    res.status(500);
    res.end();
  }
}
