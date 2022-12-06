const test = require('ava');
const part1 = require('./part1');
const path = require('path');

test('example', t => {
    const data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const solution = 7;
    t.is(part1.count_increased(data), solution);
})

test('read file', t => {
    let file_path = path.join(__dirname, './part1_input.test.txt');
    const solution = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    t.deepEqual(part1.read_datafile(file_path), solution);
})

test('create sliding window', t => {
    const data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
    const solution = [607, 618, 618, 617, 647, 716, 769, 792]
    t.deepEqual(part1.convert_sliding_window(data), solution);
})
