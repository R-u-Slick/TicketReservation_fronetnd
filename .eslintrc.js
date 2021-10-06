module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": 0,
    "import/prefer-default-export": "off",
    "arrow-body-style": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
