function solution(polynomial){
  const arr = polynomial.split(" + ");
  console.log(arr)

  let xCount = 0;
  let sum = 0;
  
  arr.forEach((e) => {
    if(e.includes("x")){
        const xArr = e.split("x");
        if(xArr[0] === "") xCount += 1;
        if(xArr[0] !== "") xCount += Number(xArr[0]);
    }
    
    if(!e.includes("x")) sum += Number(e);
})

  if(xCount !== 0 && sum !== 0){
    return xCount === 1 ? `x + ${sum}` : `${xCount}x + ${sum}`;
  }

  if(xCount !== 0 && sum === 0){
    return xCount === 1 ? 'x' : `${xCount}x`;
  }

  if(xCount === 0 && sum !== 0){
    return `${sum}`;
  }

  if(xCount === 0 && sum === 0){
    return '0';
  }

}

solution("3x + 7 + x")
solution("x + x + x")
solution("7 + 8 + 954")
solution("7 + 8 + 954")