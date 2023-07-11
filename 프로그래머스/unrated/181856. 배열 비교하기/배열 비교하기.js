function solution(arr1, arr2) {
    const arr1Len = arr1.length;
    const arr2Len = arr2.length;
    
    if(arr1Len !== arr2Len) return arr1Len > arr2Len ? 1 : -1;
    else if(arr1Len === arr1Len){
        const arr1Sum = arr1.reduce((a, c) => a + c, 0);
        const arr2Sum = arr2.reduce((a, c) => a + c, 0);
        
        if(arr1Sum !== arr2Sum) return arr1Sum > arr2Sum ? 1 : -1;
        else if(arr1Sum === arr2Sum) return 0;
    }
}