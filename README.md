# eslint-plugin-no-chinese

用于检查代码中是否包含中文，检查i18n

请在多语言文件中添加`/* eslint-disable no-chinese/no-chinese */`注释

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-chinese`:

```sh
npm install eslint-plugin-no-chinese --save-dev
```

## Usage

Add `no-chinese` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-chinese"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-chinese/no-chinese": "error"
    }
}
```

## Supported Rules

* Fill in provided rules here


