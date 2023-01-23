module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-strongly-recommended',
        'prettier'
    ],
    parserOptions: {
        parser: ['@babel/eslint-parser', 'babel-eslint', 'eslint-plugin-vue'],
        requireConfigFile: false,
    },
    rules: {
        'vue/html-closing-bracket-newline':['error', {
            'singleline': 'never',
            'multiline': 'always'
        }],
        'vue/html-self-closing': ['error', {
            'html': {
                'void': 'always',
                'normal': 'never',
                'component': 'always'
            },
            'svg': 'always',
            'math': 'always'
        }],
        'indent': 'off'
    }
}