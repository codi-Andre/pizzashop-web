/** @type {import("prettier").Config} */

const config = {
  tabWidth: 2,
  useTabs: false,
  semi: false,
  trailingComma: "es5",
  arrowParens: "always",
  singleQuote: false,
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-tailwindcss"],
}

module.exports = config
