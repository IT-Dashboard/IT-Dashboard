# IT-Dashboard

Welcome to the IT Dashboard project! This open-source application is a framework to incorporate all of the tools your IT organization may need.

Built by the capstone dream team: Jacob Hooker, Kyle Hoganson, Robert Raheja, Sam Kharel, Sky Kim

## Getting Started

- Install [Node.js](https://nodejs.org/en/) v16.14.0
- Run `npm i` in the project directory to install [Next.js](https://nextjs.org/) and other project dependencies
- Once installed, `npm run dev` will start up a local server with hot reload enabled, available at: http://localhost:3000/
- Code pushed to the `main` branch will be auto-deployed to https://gtri-it-dashboard.herokuapp.com/

## Local Environment Setup

Copy `.env.example` to `.env` and complete the following variables:

- `DATABASE_URL`: [Found on Heroku](https://data.heroku.com/datastores/9807797f-dd60-43fd-96fd-c9fbd6c4e9f0#administration)
- `SECRET_COOKIE_PASSWORD`: [Random 32+ characters](https://www.grc.com/passwords.htm)

## Helpful Resources and Documentation

To begin development in the application, start by reviewing the documentation of the frameworks and libraries in use.

- NextJS Webserver References:

  - Basic pages: https://nextjs.org/docs/basic-features/pages
  - Layouts: https://nextjs.org/docs/basic-features/layouts
  - Data fetching: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
  - API routes: https://nextjs.org/docs/api-routes/introduction

- Database: https://www.prisma.io/docs/concepts

- CSS Framework: https://tailwindcss.com/docs/utility-first

- UI Components: https://headlessui.dev/

- Charting UI:

  - https://react-chartjs-2.netlify.app/components
  - https://www.chartjs.org/docs/latest/

- Icons:
  - https://heroicons.com/
  - https://react-icons.github.io/react-icons/
