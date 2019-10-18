# Bookspero

## demo
- https://supero.leoancap.now.sh 


## Installation

Instal Node by downloading it from https://nodejs.org/en/download/current.

Install the Yarn CLI from https://yarnpkg.com/lang/en/docs/install.

1. Clone project.

```
git clone https://github.com/leoancap/bookspero
```

2. cd into folder.

```
cd bookspero
```

3. Download and install dependencies.

```
yarn
```

## View app in development mode on http://localhost:3000

```
yarn start
```

## Build app for production

```
yarn build
```

## Run Tests

```
yarn test
```

## Tech Stack

- React
- Redux
- Typescript
- Styled-Components

## Development Steps

1. Add app specific types (Book Items)
2. Create action types (FETCH_BOOKS,SET_BOOKS)
3. Create app state types (data in reducers)
4. Hook up types to actions
5. Hook up types to reducers
6. Hook up types to store
7. Hook up types to middleware (Thunk)
8. Hook up types to components

## Folder structure

```
src/
├── __tests__   =>  tests suites for actions and reducers
├── assets      =>  images and icons for the application, i.e. favicon
├── components  =>  this holds all of the components expect for pages and router
├── constants   =>  contant values to be used across the application
├── customHooks =>  some customHooks to be reused if needed
├── pages       =>  the routes that represent a page
├── router      =>  the router component for designating logic between pages
├── selectors   =>  helper functions for managing logic control
├── services    =>  interaction with apis or backends
├── store       =>  configuration of the redux store following the ducks pattern
├── styled      =>  styling configuration files and style types
├── types       =>  typing declarations including domain types and module types
└── utils       =>  helper functions that are common to many components and tests
```

## Linting and formatting

- The eslint-config-airbnb as the main liner.
- The eslint-config-prettier for formatting (make sure you have the plugin also installed in vscode).

## State management

- The majority of state management is done with redux following the ducks pattern. It provides a domain driven design for actions and reducers. https://github.com/erikras/ducks-modular-redux
- Local state is managed with React hooks.

## Styling

- It uses styled-components, a CSS-in-JS solution. This way your styles are only coupled to the specific component. It also provides a more performant stylesheet than common CSS solutions such as Sass.

## Static types

- It uses typescript with some strict rules. No implicity and explicity any.
- Typescript will save you mental energy in the long run.

## Modularization

- It uses the package.json alias property to turn every folder in a modular in itself.
- With such practice, you get a cleaner code across your files. To import a component you just write.

`import { Button, InputField } from "#components";`

## Bundling and building

- Parcel-bundler is used both for development mode and building for production with zero configuration.

## Deployment

- Served on Zeit now as static pages. To deploy in your account just run in the project folder:
  `npx now`

## API

## Features

- [x] Search books by title, author and ISBN.

- [x] Book listing with the following properties:

1. Title
2. ISBN
3. Author
4. Editor
5. Year

- [x] Amount available

- [x] Pagination

- [x] Filter by year

- [x] View details of book
