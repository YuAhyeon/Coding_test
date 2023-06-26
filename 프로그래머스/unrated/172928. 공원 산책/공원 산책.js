function solution(park, routes) {
  let y, x;
  park.forEach((e, idx0) => {
    [...e].forEach((e, idx1) => {
      if (e === 'S') {
        y = idx0;
        x = idx1;
      }
    });
  });

  const parkW = park[0].length;
  const parkH = park.length;

  routes.forEach((e) => {
    const [direction, moveNum] = e.split(' ');

    for (let i = 1; i <= Number(moveNum); i += 1) {
      if (direction === 'W') {
        if (x - i < 0) break;
        if (park[y][x - i] === 'X') break;
        if (i === Number(moveNum)) x -= i;
      } 
      else if (direction === 'E') {
        if (x + i >= parkW) break;
        if (park[y][x + i] === 'X') break;
        if (i === Number(moveNum)) x += i;
      } 
      else if (direction === 'S') {
        if (y + i >= parkH) break;
        if (park[y + i][x] === 'X') break;
        if (i === Number(moveNum)) y += i;
      } 
      else if (direction === 'N') {
        if (y - i < 0) break;
        if (park[y - i][x] === 'X') break;
        if (i === Number(moveNum)) y -= i;
      }
    }
  });

  return [y, x];
}

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']));
