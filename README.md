# Atlar

This project was created using `create-react-app` and includes the following libraries and tools: `yarn`, `react-router`, `eslint` + `prettier`, `material-ui`, `husky`, `emotion`, and `react-helmet-async`. The project utilizes `useMemo` and `useCallback` hooks to memoize functions and variables, which is considered a must.

## Description

This project is a small app which contains two pages. Most of the app utilizes Material UI. It was bootstrapped with `create-react-app`, providing a foundation for building a React application. The project incorporates various libraries and tools to enhance the development experience and add functionality to the application.

## Features

- Accounts List
- Transactions List

## Installation

1. Clone the repository: `git clone https://github.com/vladislav-chiorescu/atlar.git`
2. Navigate to the project directory: `cd atlar`
3. Install dependencies: `yarn install`

## Usage

To start the development server, run the following command:

```bash
yarn start
```

This will launch the application in development mode and open it in your default browser. The page will automatically reload if you make any changes to the source code.

## Dependencies

The project relies on the following dependencies:

- `@emotion/react`: ^11.11.1
- `@emotion/styled`: ^11.11.0
- `@fontsource/roboto`: ^5.0.3
- `@mui/icons-material`: ^5.11.16
- `@mui/material`: ^5.13.5
- `@testing-library/jest-dom`: ^5.14.1
- `@testing-library/react`: ^13.0.0
- `@testing-library/user-event`: ^13.2.1
- `@types/jest`: ^27.0.1
- `@types/node`: ^16.7.13
- `@types/react`: ^18.0.0
- `@types/react-dom`: ^18.0.0
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-helmet-async`: ^1.3.0
- `react-router-dom`: ^6.13.0
- `react-scripts`: 5.0.1
- `typescript`: ^4.4.2
- `web-vitals`: ^2.1.0
- `@babel/plugin-proposal-private-property-in-object`: ^7.21.11
- `@faker-js/faker`: ^8.0.2
- `husky`: ^8.0.3
- `lint-staged`: ^13.2.2
- `prettier`: 2.8.8

## Development Tools

The project includes the following development tools:

- `eslint`: A pluggable JavaScript linter that enforces code quality and consistency.
- `prettier`: An opinionated code formatter that helps maintain consistent code style.
- `husky`: A Git hook manager that enables running scripts before committing or pushing code.
- `react-helmet-async`: A library for managing document head tags such as title, meta, and more in a React application.

## File Structure

```plaintext
├── public
│   ├── index.html
│   ├── manifest.json
│   └── ...
├── src
│   ├── _mock
│   │   ├── mockFunc1.ts
│   │   ├── mockFunc2.ts
│   │   └── ...
│   ├── components
│   │   ├── Component1.tsx
│   │   ├── Component2.tsx
│   │   └── ...
│   ├── layout
│   │   ├── index.tsx
│   │   ├── Layout.tsx
│   │   └── ...
│   ├── pages
│   │   ├── Page1.tsx
│   │   ├── Page2.tsx
│   │   └── ...
│   ├── theme
│   │   ├── index.tsx
│   ├── utils
│   │   ├── index.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── routes.tsx
│   └── ...
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── package.json
├── yarn.lock
└── ...
```

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
