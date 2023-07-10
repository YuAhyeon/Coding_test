function solution(arr) {
    const stk = [];
    let i = 0;
    while(i < arr.length){
        if(!stk.length){
            stk.push(arr[i]);
            i += 1;
        }
        else if(arr.length && stk.at(-1) === arr[i]){
            stk.pop();
            i += 1;
        }
        else if(stk.length && stk.at(-1) !== arr[i]){
            stk.push(arr[i]);
            i += 1;
        }
    }
    
    return stk.length ? stk : [-1];
}