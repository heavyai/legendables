import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sucrase from "@rollup/plugin-sucrase";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

const env = process.env.NODE_ENV;
const config = {
  input: "index.ts",
  output: {
    file: "dist/legendables.js",
    format: "umd",
    name: "Legendables"
  },
  plugins: [
    sucrase({ exclude: ["node_modules/**"], transforms: ["typescript"] }),
    commonjs(),
    resolve(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      extensions: [".js", ".ts"]
    })
  ]
};

if (env === "production") {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

export default config;
