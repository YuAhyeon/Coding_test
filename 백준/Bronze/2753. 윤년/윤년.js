const fs = require('fs');
const year = fs.readFileSync("/dev/stdin").toString().trim();
let answer = 0;
if(year % 4 === 0 && (year % 100 !== 0  || year % 400 === 0)) answer = 1;
console.log(answer);
