function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) {
        for(let r = i; r < arr1.length; r++) {
            result.push(arr1[r]);
        }
    }

    if (j < arr2.length) {
        for(let r = j; r < arr2.length; r++) {
            result.push(arr2[r]);
        }   
    }

    return result;
}



function mergeSort(arr) {
    if (arr.length == 0) {
        return []  
    }

    if (arr.length == 1) {
        return arr;  
    } 
    const mid = Math.round(arr.length / 2);
    const arr1 = arr.slice(0, mid);
    const arr2 = arr.slice(mid);

    console.log({mid, arr1, arr2});
}

const mArr = merge([1], [0, 2, 6]);
console.log(mArr);
