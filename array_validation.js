function arraysum(arr) {

    if (!Array.isArray(arr)) {
        return "please provide me an Array"
    }
    let sum = 0;
    for (let iteam of arr) {
        sum += iteam;
    }
    return sum;
}

//const x = [1, 2, 3, 4, 5];

console.log(arraysum(5))