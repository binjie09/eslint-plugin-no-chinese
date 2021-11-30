const rule = require("../../../lib/rules/no-chinese"),
  RuleTester = require("eslint").RuleTester;
var ruleTester = new RuleTester();
const ruleNoConsoleChinese = require("../../../lib/rules/no-console-chinese");

ruleTester.run("no-chinese", rule, {
  valid: ["function test(d, e, f) { console.log('中文'); return 'chinese' }"],
  invalid: [
    {
      code: "function test(d, e, f) { console.log('中文'); return '中文' }",
      errors: [{
        message: "中文 请检查代码中的中文字符，使用多语言方法替换。或者在多语言文件中添加/* eslint-disable no-chinese/no-chinese */",
      }]
    },
  ],
});

ruleTester.run("no-console-chinese", ruleNoConsoleChinese, {
  valid: ["function test(d, e, f) { console.log('chinese'); return 'chinese' }"],
  invalid: [
    {
      code: "function test(d, e, f) { console.log('中文'); return 'chinese' }",
      errors: [{
        message: "中文 请检查console中的中文字符，使用多语言方法替换。或者在多语言文件中添加/* eslint-disable no-chinese/no-chinese */",
      }]
    },
  ],
});
