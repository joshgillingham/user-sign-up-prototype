/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const {
  webpackConfig,
  webpackMerge,
  htmlOverlay,
  stylesOverlay,
  tsOverlay,
  fileOverlay,
} = require("just-scripts");

module.exports = () =>
  webpackMerge(
    webpackConfig,
    stylesOverlay(),
    tsOverlay(),
    fileOverlay(),
    htmlOverlay({
      template: "public/index.html",
      hash: true,
    }),
    {
      mode: "production",
      output: {
        chunkFilename: "[id]-[hash].js",
      },
      resolve: {
        alias: {
          "@app": path.resolve(__dirname, "lib"),
        },
      },
    }
  );
