import { includeIgnoreFile } from '@eslint/compat'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import { fileURLToPath } from 'url'

const gitignorePath = fileURLToPath(new URL(".gitignore", import.meta.url))

export default defineConfig([
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        route: 'readonly',
      },
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: {
      '@stylistic': stylistic,
    },

    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
  includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),
  globalIgnores([
    'resources/js/Components/ui/*',
  ]),
])
