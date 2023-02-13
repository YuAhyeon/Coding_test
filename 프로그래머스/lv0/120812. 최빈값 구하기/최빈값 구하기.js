function solution(array) {

  let obj = {}

  array.forEach( e => {
    !obj.hasOwnProperty(e) ? obj[e] = 1 : obj[e] += 1
  });

  const arr = [];
  for(let num in obj){
    arr.push([num, obj[num]])
  }
  arr.sort((a,b) => b[1] - a[1])
  
  const first = arr[0][1]
  const same = arr.filter( e => first <= e[1]).length;

  return same > 1 ? -1 : Number(arr[0][0])
}

solution([1, 1, 2, 2]	)