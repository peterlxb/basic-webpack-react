const express = require("express");
const path = require("path");
const webpack = require("webpack");

const app = express();

const config = require("../../config/webpack.dev");
const compiler = webpack(config);
const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

const staticMiddleware = express.static("dist");

app.use(staticMiddleware);

app.listen(8080, () => console.log("Server running on 8080"));
