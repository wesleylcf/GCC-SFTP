# Running locally

For now the environment variables are non-sensitive, so they have been included for ease of setup.
Simply run `npm run dev`

# Overview

`src` contains `/api` and `/app`.

- `/api` is the layer which interacts with the API server
  - It mainly exposes a single object `ApiService` which encapsulates all services the frontend code interacts with.
- `/app` is the frontend code(stateless and stateful components)
