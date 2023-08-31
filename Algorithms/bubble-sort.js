function bubbleSort(arr) {
    for ( let i = arr.length; i > -1; i-- ) { // i = 4
        let swaps = false;
        for(let j = 0; j < i - 1; j++ ) {
            console.log('Hit');
            if(arr[j] > arr[j+1]) {
                swaps = true
                swap(j, j+1);
            }
        }
        if(swaps === false) {
            console.log('arr', arr)
            return arr;
        }
    } 
    function swap(idx1, idx2){
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    return arr;
}

clear();
// bubbleSort([4, 5, 6, 8, 0, 100, 3, 2, 1]);
bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);

