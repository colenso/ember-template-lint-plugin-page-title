# ember-template-lint-plugin-page-title
An ember-template-lint plugin that enforces every route template to have a page title set using the `{{page-title}}` helper.

## Compatibility

- [Node.js](https://nodejs.org/) `^12.22.0 || ^14.17.0 || >=16.0.0`
- [ember-template-lint](https://github.com/ember-template-lint/ember-template-lint/) `>=4.0.0`

## Install

```sh
yarn add -D ember-template-lint-plugin-page-title
```

As one of the peerDependencies, `ember-template-lint` will have to be installed in your project.

To use it, merge the following object
to your `.template-lintrc.js` file:

```js
module.exports = {
  plugins: ["ember-template-lint-plugin-page-title"],

  rules: {
    "require-valid-page-title": 'warn',
  }
};
```