module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prefer-arrow'],
  settings: {
    'import/ignore': ['react-native'],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': 'warn',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        'import/no-named-as-default-member': 'off',
        'no-unused-vars': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'import/no-default-export': 'warn',
        'import/order': 1,
        'prefer-arrow/prefer-arrow-functions': [
          'warn',
          {
            disallowPrototype: true,
            singleReturnOnly: false,
            classPropertiesAllowed: false,
          },
        ],
        'prefer-arrow-callback': ['warn', { allowNamedFunctions: true }],
        'func-style': ['warn', 'expression', { allowArrowFunctions: true }],
      },
    },
  ],
};
