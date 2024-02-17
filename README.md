# Overview

This is a monorepo with two projects, `project-web` and `project-backend`.

- READMEs are included for major components like projects and services.

`project-web` houses the frontend code. The tech stack is

- Meta framework: [NextJS](https://nextjs.org/)
- CSS framework: TailwindCSS
- Component Library: AntDesign

`project-backend` houses the backend code. The tech stack is:

- Meta framework: [NestJS](https://docs.nestjs.com/)
- Input validation and transformation: class-validator and class-transformer
- Logger: NestJS default logger

# Setting up the local environment

1. Navigate to `project-backend` and run `npm run start:dev`
2. Navigate to `project-web` and run `npm run dev`
   - Note: local environment variables have been included in the repository since the current variables are not sensitive
