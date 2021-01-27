/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const {
  webpackServeConfig,
  webpackMerge,
  htmlOverlay,
  tsOverlay,
  fileOverlay,
} = require("just-scripts");

module.exports = () =>
  webpackMerge(
    webpackServeConfig,
    tsOverlay(),
    fileOverlay(),
    htmlOverlay({
      template: "public/index.html",
      hash: true,
    }),
    {
      mode: "development",
      devServer: {
        historyApiFallback: true,
      },
      entry: "./src/index.tsx",
      devtool: "inline-source-map",
      output: {
        chunkFilename: "[id]-[hash].js",
      },
      resolve: {
        alias: {
          "@app": path.resolve(__dirname, "src"),
        },
      },
    }
  );
