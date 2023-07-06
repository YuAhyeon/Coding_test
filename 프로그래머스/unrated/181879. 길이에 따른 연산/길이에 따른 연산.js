function solution(num_list) {
    const listLen = num_list.length;
    
    if(listLen >= 11){
        return num_list.reduce((a, c) => a + c, 0);
    }
    else{
        return num_list.reduce((a, c) => a * c, 1);
    }
}