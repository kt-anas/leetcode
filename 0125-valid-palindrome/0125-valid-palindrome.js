/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s===''|| s===" ") return true

    let res = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    if(res===res.split('').reverse().join('')){
        return true;
    }
    return false;

};