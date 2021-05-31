import pluginTypescript from "@rollup/plugin-typescript";
import pluginCommonjs from "@rollup/plugin-commonjs";
import pluginNodeResolve from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";
import dts from "rollup-plugin-dts";
import * as path from "path";
import pkg from "./package.json";

const moduleName = pkg.package_identifier;
const inputFileName = "src/index.ts";
const author = pkg.author.name;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName} v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default [
  //*.d.ts
  {
    input: "src/types/index.d.ts",
    output: [{ file: "index.d.ts", format: "es" }],
    plugins: [dts()],
  },
  // ES
  {
    input: {
      dist: `${inputFileName}`,
    },
    output: [
      {
        dir: "./",
        entryFileNames: `[name]/index.js`,
        chunkFileNames: "dist/[name]-[hash].js",
        format: "esm",
        sourcemap: "inline",
        banner,
        exports: "named",
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: [".js", ".ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: path.resolve(__dirname, ".babelrc.js"),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },

  // CommonJS
  {
    input: {
      dist: `${inputFileName}`,
    },
    output: [
      {
        dir: "./",
        entryFileNames: `[name]/index.cjs.js`,
        chunkFileNames: "dist/[name]-[hash].cjs.js",
        format: "cjs",
        sourcemap: "inline",
        banner,
        exports: "named",
      },
    ],
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.devDependencies || {}),
    ],
    plugins: [
      pluginTypescript(),
      pluginCommonjs({
        extensions: [".js", ".ts"],
      }),
      babel({
        babelHelpers: "bundled",
        configFile: path.resolve(__dirname, ".babelrc.js"),
      }),
      pluginNodeResolve({
        browser: false,
      }),
    ],
  },
];
