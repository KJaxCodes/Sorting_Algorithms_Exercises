function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    return swapIdx;

}

//????