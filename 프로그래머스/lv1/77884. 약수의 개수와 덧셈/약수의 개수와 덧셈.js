function solution(left, right) {

    let sum = 0;
    for(let i = left ; i <= right ; i++){ //left에서 rigth까지의 돌려서 각각의 약수를 구한다.
        let count = 0; // left부터 right까지 각각 약수의 개수를 판별해야 되기 때문에 for문이 증감될 때마다 초기화를 시켜 준다.
        for(let j = 1 ; j <= i ; j++){ // [약수 세기] 1부터 현재 수(i)까지 나눠서 나머지가 0이면 count 세기
            if (i % j === 0){ 
                count++
            }
        }
        count % 2 === 0 ? sum += i : sum -= i; // count가 짝수면 sum에 현재 수(i)를 더하고 아니라면 현재 수(i)를 빼준다
    }
    return sum;
}