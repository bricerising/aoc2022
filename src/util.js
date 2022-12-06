const fs = require('fs')

const read_datafile = (file_path) => {
    let data = fs.readFileSync(file_path);
    data = data.toString();
    return data.split("\n");
}

const median = (numbers) => {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

const find_closest = (data, num) => {
    let closest = 0
    for (let i=0; i<data.length; i++) {
        if (Math.abs(data[i] - num) < Math.abs(data[closest] - num)) {
            closest = i;
        }
    }
    return data[closest];
}

const binomial_coefficient = (num) => {
    let bc = 0;
    for (let i=0; i<=num; i++) {
        bc += i;
    }
    return bc;
}

module.exports = { read_datafile, median, binomial_coefficient, find_closest }
