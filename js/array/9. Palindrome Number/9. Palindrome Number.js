/**
 * @param {number} x
 * @return {boolean}
 */
var reverse = function(x) {
    const reversed =  parseInt(x.toString().split('').reverse().join(''));
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};
var isPalindrome = function(x) {
    let y = reverse(x);
    if(x === y) return true;
    return false;
    
};

let result = isPalindrome(-121);
console.log('result = ' + result);