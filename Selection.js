// ## ** selectionSort **

//     Here’s some guidance for how selection sort should work:

// - Assign the first element to be the smallest value(this is called the minimum).It does not matter right now if this actually the smallest value in the array.
// - Compare this item to the next item in the array until you find a smaller number.
// - If a smaller number is found, designate that smaller number to be the new “minimum” and continue until the end of the array.
// - If the “minimum” is not the value(index) you initially began with, swap the two values.You will now see that the beginning of the array is in the correct order(similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).
// - Repeat this with the next element until the array is sorted.

function selectionSort(arr) {  //create function
    for (let i = 0; i < arr.length; i++) { //loop to compare the starting index
        let min = i; //assign the first element to be the min

        for (let j = i + 1; j < arr.length; j++) { //loop to compare the next element to the starting index
            if (arr[min] > arr[j]) { //if a smaller number is found
                min = j; //designate that element to be the min
            }
        }

        if (min !== i) { //if i is not the min
            [arr[i], arr[min]] = [arr[min], arr[i]]; //switch places
        }
    }
    return arr;
}