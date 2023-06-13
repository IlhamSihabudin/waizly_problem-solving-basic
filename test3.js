function timeConvertion(str) {
    let hour = (Number(str[0] - '0')) * 10 + (Number(str[1] - '0') % 10)
    let response = ''
    
    if(str[8] === 'A') {
        // If time is in "AM"
        if(hour === 12) {
            response = '00'
            for (var i = 2; i <= 7; i++)
                response += str[i]
        } else {
            for (var i = 0; i <= 7; i++)
                response += str[i]
        }
    } else {
        // If time is in "PM"
        if(hour === 12) {
            response = '12'
            for (var i = 2; i <= 7; i++)
                response += str[i]
        } else {
            hour = hour + 12
            response = hour
            for (var i = 2; i <= 7; i++)
                response += str[i]
        }
    }
    
    return response
}

console.log(timeConvertion("12:01:00PM"))
console.log(timeConvertion("12:01:00AM"))
console.log(timeConvertion("19:05:45AM"))