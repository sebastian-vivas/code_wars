// Given an array of integers (x), and a target (t), you must find out if any two consecutive numbers in the array sum to t. If so, remove the second number.

// Example:

// x = [1, 2, 3, 4, 5]
// t = 3

// 1+2 = t, so remove 2. No other pairs = t, so rest of array remains:

// [1, 3, 4, 5]

// Work through the array from left to right.

// Return the resulting array.

function trouble(x, t) {
    let arr = x;
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i] + arr[i + 1];
        if (sum === t) {
            arr.splice(i + 1, i + 1);
            for (let j = 0; j < arr.length; j++) {
                sum = arr[j] + arr[j + 1];
                if (sum === t) arr.splice(j + 1, 1);
            };
        };
    };
    return arr;
};