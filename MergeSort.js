function merge(arr1, arr2) {
    const results = [];
    let i = 0; //this is a 'pointer', it points to the index of the array
    let j = 0; //this is a 'pointer', it points to the index of the array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            results.push(arr1[i]);
            i++ //increment the pointer so it moves to next index
        } else {
            results.push(arr2[j]);
            j++ //increment the pointer so it moves to next index
        }
    }
    while (i < arr1.length) {  //Once we exhaust one array, push all remaining values from other array
        results.push(arr1[i]);
        i++
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
mergeSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
mergeSort([1, 2, 3]); // [1, 2, 3]
mergeSort([]);

let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2,
    453, 546, 75, 67, 4342, 32
];

mergeSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35,
//  43, 67, 75, 232, 232, 453, 546, 4342]