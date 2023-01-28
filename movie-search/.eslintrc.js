module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        // 'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        // 'plugin:vue/vue3-recommended',
        'eslint:recommended',
        'plugin:prettier/recommended'
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
        'vue/no-reserved-component-names': 'off',
        'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
    }
}