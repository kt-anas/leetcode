/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString().split("").reverse().join("");
    return x===parseInt(y);
};