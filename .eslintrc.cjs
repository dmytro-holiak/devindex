module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  settings: {
    next: { rootDir: ["./"] },
  },
  env: { browser: true, node: true, es6: true },
  extends: [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/newline-after-import": "warn",

    "promise/always-return": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],

    eqeqeq: ["warn", "smart"],
    "no-console": ["warn", { allow: ["warn", "error"] }],

    "react/jsx-key": "warn",
  },
  overrides: [
    {
      files: ["*.config.{js,cjs,mjs,ts,tsx}", "scripts/**/*.{js,ts,tsx}"],
      rules: { "import/no-extraneous-dependencies": "off" },
    },
    {
      files: ["**/*.{test,spec}.{ts,tsx}"],
      env: { jest: true },
    },
  ],
  ignorePatterns: [
    "node_modules/",
    ".next/",
    "out/",
    "dist/",
    ".turbo/",
    "**/*.d.ts",
  ],
};
