const part1 = require('./part1');
const path = require('path');
const file_path = path.join(__dirname, 'part1_input.txt');
const data = part1.read_datafile(file_path);
console.log(`Part 1: ${part1.count_increased(data)}`);

const sliding_window = part1.convert_sliding_window(data);
console.log(`Part 2: ${part1.count_increased(sliding_window)}`);
