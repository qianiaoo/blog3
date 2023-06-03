module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["node_modules/*"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "import", "unused-imports"],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-var-requires": "off",

    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-empty-function": "off",
    "unused-imports/no-unused-imports-ts": "error",
    "@typescript-eslint/no-empty-function": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "react-hooks/exhaustive-deps": ["error"],
    // sort import settings
    "import/order": "off",

    // "import/order": [
    //   "error",
    //   {
    //     groups: ["builtin", "external", "internal", ["sibling", "parent"], "index", "unknown"],
    //     "newlines-between": "always",
    //     alphabetize: {
    //       order: "asc",
    //       caseInsensitive: true,
    //     },
    //   },
    // ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/ignore": "node_modules",
    "import/resolver": {
      typescript: {
        project: "./",
      },
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
};
