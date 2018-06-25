require("babel-runtime/regenerator");
require("./main.css");
require("./index.html");

const a = async args => {
  const { a, b } = args;
  await console.log("Hello from the past", a, b);
  console.log("done");
};

a({ a: 1, b: 2 });
