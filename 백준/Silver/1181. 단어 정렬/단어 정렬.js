const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = input.shift();
const arr = [...new Set(input)];
const sortArr = arr.sort((a, b) => {
    if (a.length === b.length) return a.localeCompare(b);
    return a.length - b.length;
});

sortArr.forEach(e => {
    console.log(e);
})

