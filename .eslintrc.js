module.exports = {
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  },
  extends: ["airbnb-base", "airbnb-flow", "prettier"],
  parser: "babel-eslint"
};
