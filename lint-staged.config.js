const config = {
  '*.{js,ts,vue}': ['eslint --fix', 'prettier --write'],
  '*.{css,json,md}': 'prettier --write',
}

export default config
