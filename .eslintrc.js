module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:solid/typescript"],
  overrides: [
  ],
  plugins: ["solid"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "double"]
  }
}
