module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: ['eslint:recommended', 'prettier'],
    rules: {
        'prefer-const': 'error',
        'no-unused-vars': 'off',
        'no-cond-assign': ['error', 'always'],
        '@typescript-eslint/no-unused-vars': [
            'error',
            { ignoreRestSiblings: true },
        ],
        '@typescript-eslint/no-explicit-any': 'error',
        'prettier/prettier': 'error',
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: [
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
            ],
            parserOptions: {
                tsconfigRootDir: __dirname,
                project: ['./tsconfig.json'],
            },
        },
        {
            files: ['*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    ignorePatterns: [
        'node_modules',
        '.fleet',
        '.yarn',
        '.idea',
        '.next',
        '.vercel',
        'dist/**/*',
        '.pnp.*',
    ],
};
