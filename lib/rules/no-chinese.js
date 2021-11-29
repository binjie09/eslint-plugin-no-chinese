
const SYMBOL_REGEX = /[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]/;
const WORD_REGEX = /[\u3400-\u9FBF]/;

function hasChinese(value) {
  return WORD_REGEX.test(value) || SYMBOL_REGEX.test(value);
}

module.exports = {
  create: function(context) {
    return {
      Literal: function(node) {
        const { value } = node;
        if (hasChinese(value)) {
          context.report({
            node,
            message: '{{ str }} 请检查代码中的中文字符，使用多语言方法替换。或者在多语言文件中添加/* eslint-disable no-chinese/no-chinese */',
            data: {
              str: node.value,
            },
          });
        }
      },
    };
  },
};
