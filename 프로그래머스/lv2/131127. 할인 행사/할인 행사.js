function solution(want, number, discount) {
  let result = 0;
  for (let i = 0; i <= discount.length - 10; i += 1) {
    const arr = discount.slice(i, i + 10);
    if (isJoin(arr, want, number)) result += 1;
  }

  return result;
}

function isJoin(arr, want, number) {
  const map = new Map();
  arr.forEach((e) => map.set(e, (map.get(e) || 0) + 1));
  for (let j = 0; j < want.length; j += 1) {
    if (map.get(want[j]) !== number[j]) return false;
  }
  return true;
}

console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
      'chicken',
      'chicken',
      'chicken',
      'chicken',
      'chicken',
      'chicken',
    ]
  )
);
console.log(
  solution(
    ['apple'],
    [10],
    [
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
    ]
  )
);
