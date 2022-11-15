function solution(strings, n) {

    return strings.sort((a, b) => {
        if(a[n] > b[n]) return 1; // 큰 경우에는 그대로
            else if(a[n] < b[n]) return -1; // 작은 경우에는 b가 앞으로 와야 되기 때문에 -1로 리턴
                else return a > b ? 1 : -1; 
                // n번 째 문자가 같을 때는 문자열을 비교해서 a가 크면 그대로 아니면 b를 앞으로
    })
    }