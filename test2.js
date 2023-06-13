function plusMinus(arr) {
    let positive = 0, negative = 0, zero = 0
    arr.map(item => {
        if (item > 0) positive++
        else if (item < 0) negative++
        else zero++
    })
    
    return (positive / arr.length).toFixed(6) + '\n' + (negative / arr.length).toFixed(6) + '\n' + (zero / arr.length).toFixed(6)
}

console.log(plusMinus([1, 1, 0, -1, -1]))
console.log("\n")
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))