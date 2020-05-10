module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    indent: ['error', 2],
    'react/jsx-indent': ['error', 2],
    "react/jsx-indent-props": [2], //验证JSX中的props缩进
    "react/no-array-index-key": 0, //防止在数组中遍历中使用数组key做索引
    "react/jsx-props-no-spreading":0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-console': 'off',
    "import/no-extraneous-dependencies": 0,
    "max-classes-per-file": ["error", 10],
    "react/prop-types": 0, //防止在React组件定义中丢失props验证
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.base.js',
      },
    },
  },
}
