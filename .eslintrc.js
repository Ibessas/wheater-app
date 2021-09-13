module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module' // Allows for the use of imports
  },

  env: {
    browser: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base'
  ],

  plugins: [
    'vue',
  ],

  globals: {
    ga: true,
    cordova: true,
    __statics: true,
    process: true,
    Capacitor: true,
    chrome: true,
  },

  // add your custom rules here
  rules: {
    'no-unused-vars': 'warn',
    'generator-star-spacing': 'warn',
    'arrow-parens': 'warn',
    'one-var': 'warn',
    'no-param-reassign': 'warn',
    'import/first': 'warn',
    'no-throw-literal': 'warn',
    'import/named': 'warn',
    'import/namespace': 'warn',
    'import/default': 'warn',
    'import/export': 'warn',
    'import/extensions': 'warn',
    'import/no-unresolved': 'warn',
    'import/no-extraneous-dependencies': 'warn',
    'comma-dangle': 'warn',
    'space-before-function-paren': 'warn',
    semi: 'warn',
  }
}
