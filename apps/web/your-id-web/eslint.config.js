// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
         "@angular-eslint/directive-selector": [
           "error",
           {
             "type": "attribute",
             "prefix": ["app","ts"],
             "style": "camelCase"
           }
         ],
         "@angular-eslint/component-selector": [
           "error",
           {
             "type": "element",
             "prefix": ["app","ts"],
             "style": "kebab-case"
           }
         ],
         "@typescript-eslint/no-non-null-assertion": "error",
         "@typescript-eslint/no-for-in-array": "error",
         "@typescript-eslint/no-this-alias": "error",
         "@typescript-eslint/no-unused-vars": "warn",
         "padded-blocks": ["error", "never"],
         "sort-imports": ["error", {
           "ignoreCase": true,
           "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
           "allowSeparatedGroups": true
         }],
         "max-classes-per-file": [
           "error",
           1
         ],
         "max-lines": [
           "error",
           500
         ],
         "no-irregular-whitespace": "error",
         "no-redeclare": "error",
         "no-unused-expressions": "error",
         "padding-line-between-statements": [
           "error",
           {
             "blankLine": "always",
             "prev": "*",
             "next": "return"
           }
         ],
         "quotes": [
           "error",
           "single"
         ],
         "semi": [
           "error",
           "always"
         ],
         "eqeqeq": "error",
         "keyword-spacing": "error",
         "space-before-function-paren": ["error", {
           "anonymous": "always",
           "named": "never",
           "asyncArrow": "always"
         }],
         "brace-style": "error",
         "no-multiple-empty-lines": ["error", {
           "max": 1
         }],
         "block-spacing": "error",
         "key-spacing": "error",
         "no-multi-spaces": "error",
         "no-unneeded-ternary": "error",
         "object-property-newline": "error",
         "indent": [
           "error",
           2,
           { "SwitchCase": 1 }
         ],
         "max-depth": [
           "error",
           4
         ],
         "object-curly-spacing": [
           "error",
           "always"
         ],
         "space-before-blocks": "error",
         "no-unmodified-loop-condition": "error",
         "no-template-curly-in-string": "error",
         "quote-props": [
           "error",
           "consistent-as-needed"
         ],
         "no-var": "error",
         "no-unused-vars": "off"
       }
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  }
);
