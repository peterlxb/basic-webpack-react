require("babel-runtime/regenerator");
require("babel-register");
require("webpack-hot-middleware/client?reload=true");
require("./main.css");
require("./index.html");
require("./app");

const a = async args => {
  const { a, b } = args;
  await console.log("Hello from the past", a, b);
  console.log("done");
};

a({ a: 1, b: 2 });
