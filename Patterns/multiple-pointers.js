function countUniqueValues(arr) {
    let indexToCompare = 0;
    let indexToCompareAgainst = 1;
    let count = 0;
    // take the first value and compare it with each item from the 2nd. 
    while ( indexToCompare < arr.length ) {
        const itemVal = arr[indexToCompare];
        if (itemVal === arr[indexToCompareAgainst]) {
            indexToCompareAgainst++;
        }
        else {
            count++;
            indexToCompare = indexToCompareAgainst;
            indexToCompareAgainst++;
        }
    }
    return count;
}


countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])

// Inputs => [1, 1, 2, 2, 3];
// Output => 3
// Whenever there is a sorted array input, most likely we will take multiple pointers approach. 
