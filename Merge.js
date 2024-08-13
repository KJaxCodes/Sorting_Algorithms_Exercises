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



let arr1 = [1, 3, 4, 5];
let arr2 = [2, 4, 6, 8];
merge(arr1, arr2) // [1,2,3,4,4,5,6,8]

arr1 // [1,3,4,5];
arr2 // [2,4,6,8];

let arr3 = [-2, -1, 0, 4, 5, 6];
let arr4 = [-3, -2, -1, 2, 3, 5, 7, 8];

merge(arr3, arr4); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]

let arr5 = [3, 4, 5]
let arr6 = [1, 2]

merge(arr5, arr6) // [1,2,3,4,5]