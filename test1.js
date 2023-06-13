function miniMaxSum(arr) {
    let min = 0, max = 0
    arr.map((item, index) => {
        let tmpArr = [...arr]
        tmpArr.splice(index, 1)
        
        arrSum = tmpArr.reduce((a, b) => a + b, 0)
        
        if (index === 0) min = max = arrSum

        min = min >= arrSum ? arrSum : min
        max = max <= arrSum ? arrSum : max
    })

    return min + ' ' + max;
}

console.log(miniMaxSum([1, 3, 5, 7, 9]))
console.log(miniMaxSum([1, 2, 3, 4, 5]))