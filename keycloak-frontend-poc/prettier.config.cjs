// eslint-disable-next-line no-undef
module.exports = {
  printWidth: 140,
  tabWidth: 2,
  endOfLine: 'lf',
  arrowParens: 'avoid',
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  bracketSpacing: true,
  importOrder: [
    '^src/types|src/utilities(.*)$',
    '^src/components/store(.*)$',
    '^src/pages(.*)$',
    '^src/components/organisms(.*)$',
    '^src/components/molecules(.*)$',
    '^src/components/atoms(.*)$',
    '^src/store(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}
