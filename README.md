# Mentor App

According to the design given in [figma](https://www.figma.com/file/pZwpdKmAAfYvdqI4RIFf2L/Use-Case?node-id=0-1&t=rb7ADY3V1GHCwFdB-0), a responsive design was created. Request to mock api is thrown with fetch in src/service folder. The icons and images used (in the public folder) were optimized for performance and used with next/image. The load more button was used while listing the cards for performance. The cards selected to show the global store usage are kept in the store with the contextApi. Since Nextjs rendered ssr, it was saved to local storage and used from there.

## Technologies and Systems Used In This Project

-   [Next.js 13](https://github.com/vercel/next.js/)
-   [React 18](https://github.com/facebook/react)
-   [TypeScript](https://github.com/microsoft/TypeScript)
-   [Context Api]- Global Store
-   Absolute Import and Path Alias — Components to import with `@/` prefix
-   [ESLint](https://github.com/eslint/eslint) — To find bugs in your code according to specific rules
-   [Prettier](https://github.com/prettier/prettier) — To format the code according to specific guidelines
-   [Husky](https://github.com/typicode/husky) & [Lint Staged](https://github.com/okonet/lint-staged)
-   [React Testing Library](https://github.com/testing-library/react-testing-library) & [Jest](https://github.com/facebook/jest) - To test component
-   [Styled Components](https://github.com/styled-components/styled-components) - For styling

## INSTALLATION

## Local

### 1. Clone the Repo:

```bash
git clone https://github.com/aysebayraktar1/mentor-app.git
```

### 2. Install Dependencies:

**yarn** is suggested.

```bash
yarn
```

### 3. Run the Development Environment:

```bash
yarn dev
```

## Docker

### 1. Build Docker:

```bash
docker build -t mentor-app .
```

### 2. Run Docker:

```bash
docker run -d -p 3000:3000 mentor-app
```

[http://localhost:3000/](http://localhost:3000/)
