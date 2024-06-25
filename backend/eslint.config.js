import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";


export default [
    {
        languageOptions: {
            globals: { ...globals.browser, ...globals.node }
        },
        files: ["src/**/*.js", "**/*.js", "**/*.ts", "**/*.tsx"],
        rules: {
            eqeqeq: "off",
            "no-unused-vars": "error",
        }
    },
    pluginJs.configs.recommended,
    js.configs.recommended,
];