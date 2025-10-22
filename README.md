# Next.js BaseApp Fullstack Template

## Description
A frontend template to be used as a starting point for new projects.

Technologies:
- Next.js
- TailwindCSS
- TypeScript
- React Query
- react-hot-toast
- Orval for automatically generated API hooks
- Shadcn UI
- Prisma ORM
- Better Auth for authentication

## Installation

Install dependencies:

```bash
yarn install
```

Copy the `.env.example` file to `.env` and add the necessary variables.

## Setup prisma

```bash
npx prisma migrate dev # run migrations
npx prisma generate # generate the prisma client
```

*Note: Make sure to run `npx prisma migrate dev` after each schema change.*

The table structure is defined in the `prisma/schema.prisma` file.

## Usage

Dev server:

```bash
yarn dev
```

Build:

```bash
yarn build
```

Generate API hooks:

```bash
yarn api
```

Lint:

```bash
yarn lint:fix
```

Reset the database:

```bash
npx prisma migrate reset
```

Prisma Studio:

```bash
npx prisma studio
```


