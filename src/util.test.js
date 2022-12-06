const test = require('ava');
const util = require('../src/util');

test('binomial coefficient', t => {
    const num = 4
    const bc = 10
    t.is(util.binomial_coefficient(num), bc);
});
