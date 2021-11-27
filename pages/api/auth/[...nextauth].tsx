import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
     signIn:  '/auth/signin',
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.SECRET,
});
