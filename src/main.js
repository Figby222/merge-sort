function sortVals(arr1, arr2) {
    let i = 0;
    let j = 0;
    let k = 0;
    let result = [];

    while(i < arr1.length || j < arr2.length) {
        if (arr1[i] < arr2[j] || j >= arr2.length) { // if i of arr1 is smaller than j of arr2 or j of arr2 doesn't exist
            result[k] = arr1[i]; // assign k of result to j of arr2
            i++;
            k++;
        } else if (arr1[i] > arr2[j] || i >= arr1.length) { // if i of arr1 is bigger than j of arr2 or i of arr1 doesnt exist
            result[k] = arr2[j]; // assign k of result to j of arr2
            j++;
            k++;
        } else if (arr1[i] == arr2[j]){ // arr1[i] == arr2[j]
            result[k] = arr1[i];
            i++;
            k++;
            result[k] = arr2[j];
            j++;
            k++;
        } else {
            break;
        }
    }
    return result;
}

function mergeSort(arr) {
    let arrI;
    let arrJ;
    if (arr.length <= 1) {
        return arr;
    } else {
        arrI = mergeSort(arr.slice(0, (arr.length / 2))) // merge sort left side of arr
        arrJ = mergeSort(arr.slice((arr.length / 2))); // merge sort right side of arr
    }

    

    return sortVals(arrI, arrJ);
}



console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));