/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sum = 0;
    let flag = x>0 ? 1 : -1;
    x = Math.abs(x);
    while(x > 0 ) {
        let remainder = x % 10;
        sum = sum * 10 + remainder;
        x = Math.floor(x/10);
    }
    return sum * flag;
};