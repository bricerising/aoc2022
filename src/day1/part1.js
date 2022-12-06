const fs = require('fs');

const count_increased = (data) => {
    let count = 0;
    data.forEach((val, i) => {
        if (i+1 < data.length) {
            if (val < data[i+1]) {
                count++;
            }
        }
    });
    return count;
}

const convert_sliding_window = (data) => {
    return data.map((val, index) => {
        if (index+2 < data.length) {
            return val + data[index+1] + data[index+2];
        } else {
            return null;
        }
    }).filter((val) => {
        return val != null;
    });
}

const read_datafile = (file_path) => {
    let data = fs.readFileSync(file_path);
    data = data.toString();
    data = data.split("\n");
    return data.map((val) => Number(val));
}

module.exports = { count_increased, read_datafile, convert_sliding_window }
