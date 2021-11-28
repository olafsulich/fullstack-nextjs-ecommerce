import { Session } from 'next-auth';
import type Prisma from '@prisma/client';

declare module 'next-auth' {
  interface Session {
    user: Prisma.User;
  }
}
