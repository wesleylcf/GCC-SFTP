# Running locally

For now there aren't any environment variables. Simply run `npm run start:dev`

# Testing

Unit tests are located in /src, located near the files which they are meant to test.
E2E tests are local in /test.

- Run `npm run test:unit` to run unit tests.
- Similarly run `npm run test:e2e` to run e2e tests.
- Else run `npm run test:all` to run all tests.

# Conventions

- Filenames: `<name>.<type/function>.ts`. For example 'calculator.service.ts' contains code for the service layer for calculator module.
- Folders: Files should be put into folders base on high cohesion and not type of files. i.e. we should not have a folders 'controllers', 'services', 'database', but have a folder for each module.
