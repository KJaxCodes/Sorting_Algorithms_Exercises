// ## ** insertionSort **

//     Here’s some guidance for how insertion sort should work:

// - Start by picking the second element in the array(we will assume the first element is the start of the “sorted” portion)
//     - Now compare the second element with the one before it and swap if necessary.
// - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.
// - Repeat until the array is sorted.

function insertionSort(arr) {  //create function
    for (let i = 1; i < arr.length; i++) { //loop through the array starting at index 1 / second element
        let current = arr[i]; //current is the element being compared
        let j = i - 1; //j is the element just before the current element
        while ((j > -1) && (current < arr[j])) { //iterate through the sorted portion to place the element in the correct place
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current; //move to the next element to compare
    }
    return arr;
}

insertionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
insertionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
insertionSort([1, 2, 3]); // [1, 2, 3]
insertionSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

insertionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34,
//  34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]