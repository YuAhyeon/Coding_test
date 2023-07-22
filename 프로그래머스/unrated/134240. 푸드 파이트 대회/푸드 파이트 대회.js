function solution(food) {
    const answer = [0];
    food = food.map(e => e % 2 === 0 ? e : e - 1);

    for(let  i = food.length - 1 ; i >= 0 ; i -= 1){
        while(food[i]) {
            answer.push(i);
            answer.unshift(i);
            food[i] -= 2;
        }
    }

    return answer.join('')
}

console.log(solution([1, 3, 4, 6]))
console.log(solution([1, 7, 1, 2]))