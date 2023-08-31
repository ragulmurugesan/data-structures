// Search for the item in the array by dividing the array.
// Works if the array is a sorted array. 

function search(arr, el){
    let minIndex = 0;
    let maxIndex = arr.length - 1;
    let middleIndex = 0;
    let middleValue = 0;
    while ( minIndex <= maxIndex ) {
        middleIndex = Math.floor((minIndex + maxIndex) / 2);
        middleValue = arr[middleIndex];
        if( middleValue > el ) {
            maxIndex = middleIndex - 1;
        } else if ( middleValue < el ) {
            minIndex = middleIndex + 1;
        } else {
            return middleIndex;
        }
    }
    return -1;
}

console.log(search([1,2,3,4,5, 6, 7, 8, 9, 10, 11], 7));