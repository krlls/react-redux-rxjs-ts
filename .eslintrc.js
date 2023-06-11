
const patch = new Array(10).fill(null).map((_, i) => '../'.repeat(i + 1)).join(',');
const FILE_PATCH = `.,..,${patch.slice(1, -1)}`

// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  globals: {
    'process': true,
  },
  'ignorePatterns': ['gulpfile.js', 'gulp/**/*', 'webpack.*', 'jest.*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    //Todo Temporary fix, see https://github.com/typescript-eslint/typescript-eslint/issues/6934
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'quotes': ['error', 'single'],
    'no-unused-vars': 'off',
    'no-dupe-else-if': 'off',
    'no-console': ['error'],
    'no-debugger': ['error'],
    'no-empty': ['error', { 'allowEmptyCatch': true }],
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '_' }],
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'comma',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    'import/order': [
      'error',
      {
        'pathGroups': [
          {
            'pattern': `{${FILE_PATCH}}/types`,
            'group': 'internal'
          },
        ],
        'newlines-between': 'always',
        'groups': ['external', 'index', 'internal', ['parent', 'sibling']]
      }
    ],
  },
  overrides: [
    {
      'files': ['**/*.ts', '**/*.tsx',  '**/*.tsx'],
    }
  ]
}
