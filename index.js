import RequireValidPageTitleRule from "./lib/rules/require-valid-page-title.js";

export default {
  name: "ember-template-lint-plugin-page-title",

  rules: {
    "require-valid-page-title": RequireValidPageTitleRule,
  },
};
