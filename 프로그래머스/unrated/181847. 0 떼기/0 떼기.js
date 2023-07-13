function solution(n_str) {
    let idx = 0;
    for(let i = 0 ; i < n_str.length ; i += 1){
        if(Number(n_str[i]) >= 1){
            idx = i;
            break;
        }
    };
    
    return n_str.slice(idx, n_str.length);
}