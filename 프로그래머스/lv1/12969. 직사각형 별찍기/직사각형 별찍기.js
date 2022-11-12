process.stdin.setEncoding('utf8');
process.stdin.on('data', starstar => {
    const arr = starstar.split(" ");  // 입력받은 두 개의 정수를 " "를 기준으로 배열로 변환
    const n = Number(arr[0]); // a는 한 줄에 나와야 할 별의 개수
    const m = Number(arr[1]); // b는 몇 줄 나와야 되는지 출력
    
    let star = '*'.repeat(n)    
    for(let i = 1 ; i <= m ; i++){ //줄 수까지 반복 
        console.log(star); //한 줄씩 출력!
    }
});