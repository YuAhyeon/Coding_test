function solution(nums) {
    // 홍박사가 나한테 자기 연구실에 있는 N마리 폰켓몬 중에서 N/2마리를 가져가도 된다고 함
    // 폰켓몬은 종류에 따라 번호를 붙여서 구분 === 같은 종류는 같은 번호

    // nums / 2가 내가 가지고 올 수 있는 폰켓몬 수
    const half = nums.length / 2;
    
    // 종류가 겹치지 않는 폰켓몬을 가지고 오길 원함 set || filter로 중복을 없애 준다
    const only = [...new Set(nums)].length // set 사용

    // const only = nums.filter((a, b) => { //filter 사용
    //     return nums.indexOf(a) === b;
    // }).length;
    
    
    return only > half ? half : only;
}