module.exports = { 
    env: { 
      es6: true, 
      jest: true, 
      browser: true, 
      node: true, 
    }, 
    extends: ['prettier', 'plugin:prettier/recommended'], 
    globals: { 
      Atomics: 'readonly', 
      SharedArrayBuffer: 'readonly', 
    }, 
    parserOptions: { 
      ecmaFeatures: { 
        sourceType: 'module', 
        jsx: true, 
      }, 
      ecmaVersion: 2021, 
      sourceType: 'module', 
    }, 
   
    plugins: ['prettier'], 
    rules: { 
      'prettier/prettier': [ 
        'error', 
        { 
          endOfLine: 'auto', 
        }, 
      ], 
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }], 
      eqeqeq: ['error', 'allow-null'], 
    }, 
  };