/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
     let a =  BigInt(num1);
let b =  BigInt(num2);
return (a+b).toString();
};