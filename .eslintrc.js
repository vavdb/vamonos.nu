module.exports = {
  root: true,

  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: [
      '.vue'
    ],
    ecmaVersion: 2020
  },

  env: {
    browser: true,
    jest: true,
    node: true,
  },

  extends: [
    'airbnb-typescript/base',
    'plugin:vue-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/strongly-recommended',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
  ],

  plugins: ['@typescript-eslint', 'vue-a11y', 'prettier', 'vue'],

  // add your custom rules here
  rules: {
    // disable the rule for all files
    "@typescript-eslint/explicit-module-boundary-types": "off",
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100
      }
    ],

        
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        ts: 'never'
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'vue/max-attributes-per-line': 'off',
    'vue/component-name-in-template-casing': [
      1,
      'kebab-case'
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  // WARN
  // D:\Dev\vamonos.nu\app\utils.ts
  // 5:34  error  Object pattern argument should be typed  @typescript-eslint/explicit-module-boundary-types
  // "overrides": [
  //   {
  //     // enable the rule specifically for TypeScript files
  //     "files": ["*.ts", "*.tsx"],
  //     "rules": {
  //       "@typescript-eslint/explicit-module-boundary-types": ["error"]
  //     }
  //   }
  // ],
  settings: {
    'import/core-modules': [
      '@nuxt/config',
      '@nuxt/vue-app',
      '@nuxt/types',
      'purgecss-webpack-plugin',
      'vue',
      'vuex',
      'vue-meta',
      'vue-server-renderer',
      'vue-router',
    ],
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            extensions: ['.js', '.json', '.ts', '.vue'],
            alias: {
              '~': __dirname + '/app',
              '@': __dirname + '/app',
            },
          },
        },
      },
    },
  },

  'extends': [
    'airbnb-typescript/base',
    'plugin:vue-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/strongly-recommended',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ]
};
