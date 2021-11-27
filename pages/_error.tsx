import { ReactElement } from "react";
import { NextPageContext, NextPage } from "next";
import NextErrorComponent, { ErrorProps as NextErrorProps } from "next/error";
import * as Sentry from "@sentry/nextjs";

type ErrorPageProps = {
  err: Error;
  statusCode: number;
  hasGetInitialPropsRun: boolean;
  children?: ReactElement;
};

type ErrorProps = {
  hasGetInitialPropsRun: boolean;
} & NextErrorProps;

function ErrorPage({ statusCode, hasGetInitialPropsRun, err }: ErrorPageProps) {
  if (!hasGetInitialPropsRun && err) {
    Sentry.captureException(err);
  }

  return <NextErrorComponent statusCode={statusCode} />;
}

ErrorPage.getInitialProps = async ({ res, err, asPath }: NextPageContext) => {
  const errorInitialProps = (await NextErrorComponent.getInitialProps({
    res,
    err,
  } as NextPageContext)) as ErrorProps;

  errorInitialProps.hasGetInitialPropsRun = true;

  if (err) {
    Sentry.captureException(err);

    await Sentry.flush(2000);

    return errorInitialProps;
  }

  Sentry.captureException(
    new Error(`_error.js getInitialProps missing data at path: ${asPath}`)
  );

  await Sentry.flush(2000);

  return errorInitialProps;
};

export default ErrorPage;
