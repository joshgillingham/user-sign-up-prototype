/* eslint-disable @typescript-eslint/no-var-requires */
const {
  task,
  tscTask,
  parallel,
  series,
  taskPresets,
  webpackTask,
  cleanTask,
} = require("just-scripts");

task("my-ts:esm", tscTask({ module: "esnext", outDir: "./lib" }));
task("my-ts", parallel("my-ts:esm"));
task("my-webpack", webpackTask());
task("my-clean", cleanTask({ paths: ["./tsconfig.build.tsbuildinfo", "./lib", "./dist"] }));
task("my-build", series("my-ts", "my-webpack"));

taskPresets.webapp();
