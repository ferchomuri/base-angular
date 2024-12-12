import sonarjs from 'eslint-plugin-sonarjs';
import parse from '@typescript-eslint/parser';

export default [
  sonarjs.configs.recommended,
  {
    files: [
      'projects/ngx-pbo-productoscartera/**/*.ts',
      'projects/ngx-pbo-productoscartera/**/*.js',
    ],
    languageOptions: {
      parser: parse,
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    ignores: ['projects/ngx-pbo-productoscartera/**/*.spec.ts'],
  },
];
