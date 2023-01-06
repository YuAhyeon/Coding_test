function solution(c) {

  let result = c.length;
  console.log(result)
  
  let closet = {};
  for(let i = 0 ; i < c.length ; i++){
    // 종류는 돌면 안 돼~!
    for(let j = 0 ; j < c[i].length-1 ; j++){
      const kind = c[i].at(-1) //종류
      /* 옷장 안에 의상 종류가 있는지 확인하고, 없으면 종류를 만들어 주고 
      해당 종류의 옷들을 옷장에 넣어줌 */
      console.log(kind)
      if(!closet.hasOwnProperty(kind)){
        closet[kind] = []
      }
      closet[kind].push(c[i][j]);
    }
  }
  
  closet = Object.values(closet)

  let dressUp = 1;
  for(let i = 0 ; i < closet.length ; i++){
    dressUp *= closet[i].length+1
  }
  console.log(dressUp)
  console.log(dressUp-1)

  return dressUp-1
}

solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])

/*
처음부터 끝까지 하나씩 다 비교 ?
1. 객체에 넣고(중복 종류 해결할 수 있음)
2. 배열로 바꿔가지고
3. 조합 가능한 거 구하면 될지도...


yellow_hat, green_turban 2

blue_sunglasses 2


green_turban green_turban 2


베이스로 clothes.length에 + 조합가능한 것을 더하면 됨
종류가 겹치면 안 됨

서로 겹치면 안 됨,,,
.at(-1)해서 종류들만 비교 후, 겹치는 게 있으면 그 종류끼리 묶어주기 ?


*/

