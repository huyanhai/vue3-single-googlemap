import VuePlugin from "rollup-plugin-vue";
import PostCSS from "rollup-plugin-postcss";
import NodeResolve from "@rollup/plugin-node-resolve";
import CommonJS from "@rollup/plugin-commonjs";
import Babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

const config = [
  {
    input: "src/index.js",
    output: {
      file: "dist/app.js",
      format: "es",
      sourcemap: false,
    },
    plugins: [
      NodeResolve(),
      VuePlugin({
        cssModulesOptions: {
          generateScopedName: "[local]___[hash:base64:5]",
        },
      }),
      CommonJS(),
      PostCSS(),
      Babel(),
      terser(),
    ],
    external: ["vue", "markerwithlabel", "connect-google-maps"],
  },
];

export default config;
