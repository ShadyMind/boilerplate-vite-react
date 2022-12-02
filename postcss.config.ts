export default {
  ident: 'postcss',
  extends: 'stylelint-config-recommended',
  plugins: [
    require('autoprefixer'),
    require('postcss-modules-values'),
    require('postcss-nested-selectors')
  ],
  rules: {
    // 'selector-nested-pattern': '^&'
  }
};
