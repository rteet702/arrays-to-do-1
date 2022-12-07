const array = [5, 6, 7, 8];

const pushFront = (arr, val) => {
    return [val, ...arr];
};

const popFront = (arr) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) continue;
        newArr[i - 1] = arr[i];
    }
    console.log(newArr);
    return arr[0];
};

const insertAt = (arr, val, index) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < index) {
            newArr[i] = arr[i];
        } else if (i === index) {
            newArr[i] = val;
            newArr[i + 1] = arr[i];
        } else {
            newArr[i + 1] = arr[i];
        }
    }
    return newArr;
};

const removeAt = (arr, index) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < index) {
            newArr[i] = arr[i];
        } else if (i === index) continue;
        else {
            newArr[i - 1] = arr[i];
        }
    }
    console.log(newArr);
    return arr[index];
};

console.log(pushFront(array, 9));
console.log(popFront(array));
console.log(insertAt(array, 2000, 0));
console.log(removeAt(array, 2));
