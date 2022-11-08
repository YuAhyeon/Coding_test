function solution(n) {
    //정수를 받았으니 문자열로 바꿔 준다.
    n = n.toString();
    // split()을 이용하여 n을 배열로 만들어 준다.
    let a = n.split('');
    // 배열을 정렬하는 sort() 메서드를 사용하여 내림차순으로 만든다.
    a = a.sort(function (a, b){
        return b-a;
    });
    // 출력을 배열이 아닌 숫자형으로 해야 되기 때문에 
    // 내림차순 된 배열 a를 문자열 변수 result에 넣어 준 후, result를 숫자형으로 바꿔서 리턴 시킬 계획이고 작정임...
    // for in을 사용하여 result에 하나하나 넣어서 풀었지만 
    // join() 메서드를 이용해서 풀 수도 있다!!
    let result = '';
    for(let i in a){
        result += a[i];
    }
    // 문자형을 숫자형으로 바꿔서 리턴한다.
    return Number(result);
   
    // join() 이용
    //return Number(a.join(''))
}
