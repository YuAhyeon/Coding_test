function solution(elements) {
  const set = new Set();
  const eTotalCount = elements.length;

  for (let i = 1; i <= eTotalCount; i += 1) {
    for (let j = 0; j < eTotalCount; j += 1) {
      if (i + j <= eTotalCount) {
        const arr = elements.slice(j, j + i);
        set.add(calculateSum(arr));
      } else {
        const arr1 = elements.slice(j);
        const arr2 = elements.slice(0, j + i - eTotalCount);
        set.add(calculateSum(arr1) + calculateSum(arr2));
      }
    }
  }
  return set.size;
}

function calculateSum(arr) {
  return arr.reduce((a, c) => a + c, 0);
}

console.log(solution([7, 9, 1, 1, 4]));
