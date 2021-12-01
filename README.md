<h1 align="center">

<br>

<img src="https://user-images.githubusercontent.com/46969484/143662399-baaa3db0-12fa-4455-9c0c-56b7c5f96552.png" width="100%" />

<br>

<br>

  Fullstack Next.js Ecommerce
  
</h1>


## Technologies 🔧

- Next.js(React)
- TypeScript
- Prisma
- NextAuth
- Stripe
- Tailwind
- React Query
- Sentry
- Yup

## Screenshots 📸

<br>


<img src="https://user-images.githubusercontent.com/46969484/143662639-de569e93-917c-40d8-b4ff-efbd6e6e82f3.png" width="100%" />

<br>

<img src="https://user-images.githubusercontent.com/46969484/143662647-7fb16f8e-f982-46a3-ad92-e5cd357fe025.png" width="100%" />

<br>

## Code Example/Issues 🔍

If you have any issues, please let me know in the issues section or directly to olafsulich@gmail.com

## Installation 💾

```bash
git clone https://github.com/olafsulich/fullstack-nextjs-ecommerce.git
```

Fill your `.env` variables:

```
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
DATABASE_URL="postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@<POSTGRES_HOST>:<POSTGRES_PORT>/<POSTGRES_DB>?schema=public&sslmode=prefer"
GITHUB_SECRET=
GITHUB_ID=
SECRET=
NEXTAUTH_URL=
NEXTAUTH_CALLBACK_URL=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_SUCCESS_REDIRECT_URL=
NEXT_PUBLIC_STRIPE_ERROR_REDIRECT_URL
```

Install deps:

```bash
npm install
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run docker-compose:

```bash
docker-compose up -d
```

Run Next dev server:

```bash
npm run dev
```

## Contributing

This is an open source project, and contributions of any kind are welcome and appreciated. Open issues, bugs, and feature requests are all listed on the [issues](https://github.com/olafsulich/fullstack-nextjs-ecommerce/issues) tab and labeled accordingly. Feel free to open bug tickets and make feature requests.
