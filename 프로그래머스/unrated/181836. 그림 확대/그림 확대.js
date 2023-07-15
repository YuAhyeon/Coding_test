function solution(picture, k) {
  let answer = [];
  picture.forEach((pixel, idx) => {
      pixel = [...pixel].map(e => e.repeat(k)).join('') + 0;
      console.log(pixel)
      const newArr = pixel.repeat(k).split('0').filter(e => e);
      answer = answer.concat(newArr);
  })
  return answer;
}

console.log(solution([".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."], 2))