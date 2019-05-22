// https://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parserOptions: {
    "ecmaVersion": 6,
    parser: "babel-eslint",
    sourceType: "module" // 代码使用了使用了ECMAScript模块
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    "html"
  ],
  settings: {
    "import/resolver": {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "indent": ["warn", 2],
    "quotes": "off",
    "semi": ["warn", "always", { "omitLastInOneLineBlock": true }],
    "space-before-function-paren": "off"
  }
}
