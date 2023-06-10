module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:testing-library/react",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-redux/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "react-refresh",
    "react-redux",
    "@typescript-eslint",
    "react-hooks",
    "prettier",
    "no-relative-import-paths",
    "testing-library",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "no-console": 1,
    "prettier/prettier": 2,
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debugging-utils": "warn",
    "testing-library/no-dom-import": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "req|res|next|val" },
    ],
    "no-relative-import-paths/no-relative-import-paths": [
      "error",
      { allowSameFolder: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
