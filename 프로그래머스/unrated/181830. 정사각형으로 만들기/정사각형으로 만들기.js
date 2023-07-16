function solution(arr) {
  const arrRow = arr.length;
  const arrCol = arr[0].length;

  if(arrRow < arrCol){
      for(let i = arrRow ; i < arrCol; i += 1){
          const newArr = Array(arrCol).fill(0);
          arr.push(newArr)
      }
  }
  
  else if(arrRow > arrCol){
      for(let j = 0 ; j < arr.length; j += 1){
        const newArr = Array(arrRow - arrCol).fill(0);
        arr[j] = arr[j].concat(newArr);
      }        
  }
  
  return arr;
}
