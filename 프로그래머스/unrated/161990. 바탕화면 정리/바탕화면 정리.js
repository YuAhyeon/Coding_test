function solution(wallpaper) {
  const wallpaperCol = wallpaper[0].length;
  const faltWallpaper = wallpaper.join('');

  const firstPosition = faltWallpaper.indexOf('#');
  const firstFileRow = Math.floor(firstPosition / wallpaperCol);
  const firstFileCol = firstPosition % wallpaperCol;

  const lastPosition = faltWallpaper.lastIndexOf('#');
  const lastFileRow = Math.floor(lastPosition / wallpaperCol) + 1;
  const laseFileCol = lastPosition % wallpaperCol;

  
  let top = [firstFileRow, firstFileCol];
  let bottom = [lastFileRow, laseFileCol];
  let left = [0, wallpaperCol];
  let right = [0, 0];

  wallpaper.forEach((row, idx) => {
    const firstIdx = row.indexOf("#");
    const lastIdx = row.lastIndexOf("#");
    if(firstIdx !== -1 && left[1] > firstIdx) left = [idx, firstIdx];
    if(lastIdx !== -1 && right[1] < lastIdx) right = [idx, lastIdx];
  })

  return [top[0], left[1], bottom[0], right[1] + 1];
}

solution([".#...", ".....", "...#.."])