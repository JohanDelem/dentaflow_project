import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.cjs"], languageOptions: { sourceType: "commonjs" } },
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,jsx,mjs}"],
    rules: {
      "react/react-in-jsx-scope": "off"
    },
    settings: {
      react: { version: "detect" }
    },
    languageOptions: {
      ecmaFeatures: { jsx: true }
    }
  },
  {
    files: ["**/*.test.{js,jsx}", "**/vitest.setup.js"],
    languageOptions: {
      globals: { test: "readonly", expect: "readonly" }
    }
  }
]);
