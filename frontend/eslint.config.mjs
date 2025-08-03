import { FlatCompat } from '@eslint/eslintrc';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next', 'next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      // React/JSX
      'react/self-closing-comp': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      // '@typescript-eslint/no-explicit-any': 'warn',    // production

      // General
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
      // 'no-console': ['warn', { allow: ['warn', 'error'] }],   // producton
      'no-duplicate-imports': 'error',
    },
  },
];

export default eslintConfig;
