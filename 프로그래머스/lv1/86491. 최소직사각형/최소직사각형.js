function solution(sizes) {
    
    // 입력받은 가로 세로의 길이를 비교해서 큰 길이를 가로로 하고 작은 길이를 세로로 바꿔 준다.
    let size = sizes.map(([width, height]) => (width < height ? [height, width] : [width, height]));
   
    // 가로, 세로를 배열로 따로 담아서 max로 구해 준 뒤 곱해서 리턴
    
    let w = []; // 가로 요소들만 든 배열
    let h = []; // 세로 요소들만 든 배열
    
    for(let i = 0 ; i < size.length ; i++){
        w.push(size[i][0]);
        h.push(size[i][1]);
    }
    
    let width_max = Math.max(...w);
    let height_max = Math.max(...h);
    
    return width_max * height_max;
    
}