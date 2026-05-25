# chess-3d-13

Initial scaffold for a browser-based 3D chess app. This repository now uses a
typed Vite + React setup with React Three Fiber, route-level tests, linting,
and formatting so later graph tasks can add chess rules and full 3D rendering.

## Requirements

- Node.js `20+`
- npm `10+`

## Setup

Install dependencies from a clean checkout:

```bash
npm install
```

## Local Development

Start the dev server:

```bash
npm run dev
```

Vite prints a local URL, typically `http://localhost:5173`.

Available routes:

- `/` for the landing screen
- `/game` for the minimal game shell route

## Scripts

- `npm run dev` starts the development server
- `npm run build` type-checks and creates a production build
- `npm run lint` runs ESLint
- `npm run test -- --run` runs the test suite once
- `npm run preview` serves the production build locally
- `npm run format` formats the repository with Prettier

## Project Structure

- `src/app` contains router setup and route tests
- `src/routes` contains route-level UI
- `src/components` contains layout and 3D preview components
- `src/styles` contains global styling
- `public` contains static assets
