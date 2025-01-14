import js from '@eslint/js'
import tanstack from '@tanstack/eslint-plugin-query'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      ecmaVersion: 2023,
    },
  },

  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@tanstack/query': tanstack,
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,


    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      ...reactHooks.configs.recommended.rules,
      ...tanstack.configs.recommended.rules,
      ...reactRefresh.configs.recommended.rules,

    },
  }
)
