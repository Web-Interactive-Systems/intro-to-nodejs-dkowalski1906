// not exported
const password = "super strong password";

// exported
const foo = "foo";
const bar = "bar";
const baz = "baz";

// Named exports for foo and bar
module.exports.baz = baz;

// Default export for baz
module.exports = { foo, bar, baz};