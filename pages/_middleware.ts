import * as Sentry from "@sentry/nextjs";
import { NextApiResponse, NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(_req: NextApiRequest, res: NextApiResponse) {
  try {
    return NextResponse.next();
  } catch (err) {
    const eventId = Sentry.captureException(err);
    res.json({ error: err });
  }
}
