module.exports = {
    env: {
        browser: true,
        node: true,
        jest: true
    },
    extends: [
        // 'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        // 'plugin:vue/vue3-recommended',
        'eslint:recommended'
    ],
    parserOptions: {
        parser: '@babel/eslint-parser'
    },
    rules: {
        'vue/html-closing-bracket-newline': ['error',{
            'singleline': 'never',
            'multiline': 'never'
        }],
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'always',
                'normal': 'never',
                'component': 'always',
            },
            'svg': 'always',
            'math': 'always'
        }],
        'vue/multi-word-component-names': 'off',
        'vue/no-reserved-component-names': 'off'
    }
}