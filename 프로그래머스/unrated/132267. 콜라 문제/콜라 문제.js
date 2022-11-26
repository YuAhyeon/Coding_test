function solution(a, b, n) {
        
        let get = 0; // 마트에서 받은 콜라의 수
        let remain = n; // 남은 콜라의 수(가진 빈 병의 수)
        let result = 0; // 받은 콜라의 합계를 구하기 위한 변수
    
        // 보유 중인 빈 병(남은 콜라)이 a개 미만일 때까지 반복
        while(remain >= a){
        // 1. 빈 병을 주고 콜라를 받는다
        // (내가 가진 빈 병 / 마트에 줘야 되는 수) * 받는 콜라의 수(받는 콜라의 수가 1이 아닐 수도 있음)
        get = Math.floor(remain / a) * b;
        // 2. 남은 콜라를 구한다
        // 남은 콜라(내가 가진 빈 병): 받은 콜라 + 아까 안 주고 남은 콜라
        remain = get + (remain % a);
        // 3. 받은 콜라 누적
        result += get;
        }
    
        return result;
}