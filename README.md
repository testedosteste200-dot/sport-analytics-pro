# SPORT ANALYTICS PRO

This application is the production-ready foundation for a sports analytics SaaS. The project includes:

- Next.js + TypeScript + Tailwind CSS
- PostgreSQL + Prisma schema
- Secure credential-based auth
- API provider abstraction layer
- Role-based access control (USER/ADMIN)
- Admin and dashboard foundations
- Development tests and structured data states

## Getting started

1. Install dependencies:
   npm install
2. Configure your PostgreSQL connection in `.env` (copy `.env.example` first):
   cp .env.example .env
3. Run Prisma migrations or db push:
   npx prisma db push
4. Start the app:
   npm run dev

## Notes

- Real data is never invented. When an API is not configured, the app surfaces clear messages like:
  `Configure uma API esportiva no painel administrativo para começar a receber dados reais.`
- API keys are not exposed to the frontend and remain server-side only.
