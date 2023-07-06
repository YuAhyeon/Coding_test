function solution(arr) {
    let x = 0;
    let prevArr = arr;
    
    while(1){
        const curArr = prevArr.map((e) => {
          if (e >= 50 && e % 2 === 0) return e / 2;
          else if (e < 50 && e % 2 === 1) return e * 2 + 1;
          else return e;
        });
        if(prevArr.every((e, i) => e === curArr[i])) break;
        prevArr = curArr;
        x += 1;
    }
    
    return x;
}