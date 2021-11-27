import * as Sentry from "@sentry/nextjs";
import { getConfig } from "./utils/config";

Sentry.init({
  dsn: getConfig("SENTRY_DSN"),
});
