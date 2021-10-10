# Timelines

A Vue App to visualize timelines of eminent persons in history

---

## Local Development Setup

### Prerequisites

- [VSCode](https://code.visualstudio.com)
- [NodeJS LTS >= 14.17.5](https://nodejs.org/en)

### Instructions

- Run `npm run install` to install dependencies
- Create a `.env.local` file similar to `.env.example`
- Replace `VITE_TIMELINES_API` with timelines API base url
- Run `npm run dev` for development server

---

## Workflow

- Create a branch from `dev` to work on a new feature or fix
- Once development is complete and tested in local, raise a merge request into `dev` branch
- If the functionality is working as expected in preview url, reviewer will merge the feature branch into `dev`
- Once the feature is complete, maintainer will merge `dev` into `main`

---

## Libraries/Packages

- Vite (Build tool)
- Axios (HTTP client)
- Vuex (State management)
