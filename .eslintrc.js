module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
  },
  parser: "@typescript-eslint/parser", // Allows ESLint to lint TypeScript.
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // A plugin that contains a bunch of ESLint rules that are TypeScript specific.
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  ignorePatterns: [
    "node_modules/",
    "lib/",
    "lib-commonjs/",
    "dist/",
    "*.hbs",
    "*.log",
    "*.svg",
    "*.ico",
    ".gitignore",
  ],
  rules: {
    "react/display-name": "off",
    "no-console": ["error"],
    "no-shadow": ["error"],
    "no-constructor-return": ["error"],
    "no-fallthrough": ["error"],
    "prettier/prettier": [
      "error",
      {
        printWidth: 100,
        endOfLine: "auto",
      },
    ],
    "@typescript-eslint/member-ordering": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/consistent-type-assertions": ["error", { assertionStyle: "angle-bracket" }],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: "explicit",
        overrides: {
          accessors: "explicit",
          constructors: "no-public",
          methods: "explicit",
          properties: "explicit",
          parameterProperties: "explicit",
        },
      },
    ],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": ["error"],
        "react/prop-types": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
