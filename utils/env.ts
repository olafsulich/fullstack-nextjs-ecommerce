type NameToType = {
  readonly ENV: 'production' | 'staging' | 'development' | 'test';
  readonly NEXTAUTH_URL: string;
  readonly NODE_ENV: 'production' | 'development';
  readonly POSTGRES_USER: string;
  readonly POSTGRES_PASSWORD: string;
  readonly POSTGRES_DB: string;
  readonly DATABASE_URL: string;
  readonly GITHUB_SECRET: string;
  readonly GITHUB_ID: string;
  readonly SECRET: string;
  readonly SENTRY_DSN: string;
  readonly NEXT_PUBLIC_NEXTAUTH_CALLBACK_URL: string;
  readonly NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string;
  readonly STRIPE_SECRET_KEY: string;
  readonly NEXT_PUBLIC_STRIPE_SUCCESS_REDIRECT_URL: string;
  readonly NEXT_PUBLIC_STRIPE_ERROR_REDIRECT_URL: string;
  readonly ABC: number;
};

export function getEnv<Env extends keyof NameToType>(name: Env): NameToType[Env];
export function getEnv(name: keyof NameToType): NameToType[keyof NameToType] {
  const val = process.env[name];

  if (!val) {
    throw new Error(`Cannot find environmental variable: ${name}`);
  }

  return val;
}
