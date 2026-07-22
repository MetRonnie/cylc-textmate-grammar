import globals from "globals"
import js from "@eslint/js"

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    js.configs.recommended,
    {
        languageOptions: {
            sourceType: "commonjs",
            globals: globals.node,
        },
    },
    {
        files: ["**/*.tmLanguage.js"],
        rules: {
            // Disable rules that are not compatible with the Oniguruma regex engine used by textmate grammars
            "no-useless-escape": "off",
        },
    },
    {
        files: ["**/*.mjs"],
        languageOptions: {
            sourceType: "module",
        },
    }
]
