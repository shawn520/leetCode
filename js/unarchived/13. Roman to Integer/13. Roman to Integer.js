/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // define an object to be a dictionary
    const ROMAN = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    // define a variable to record result
    let sum = 0;
    // loop string from end to start
    for(let i = s.length - 1; i >= 0; i--) {
        //get current number and previous number according to the dictionary
        let curr = ROMAN[s[i]], prev = ROMAN[s[i+1]];
        // if previous number exists and current number less than previous one, sum minus current value
        if(prev && curr < prev) {
            sum -= curr;
        } else {
            // else sum plus current value
            sum += curr;
        }

    }
    // return result
    return sum;
};