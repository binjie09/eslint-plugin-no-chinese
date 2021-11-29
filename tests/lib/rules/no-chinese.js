var ruleTester = new RuleTester();
ruleTester.run("no-chinese", rule, {
  valid: ["function test(d, e, f) { return '中文' }"],
  invalid: [
    {
      code: "function test(d, e, f) { return '中文' }",
      errors: [{
        message: "请检查多语言",
      }]
    },
  ],
});
