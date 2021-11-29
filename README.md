# eslint-plugin-no-chinese

用于检查代码中是否包含中文，检查i18n

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
        "no-chinese/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


