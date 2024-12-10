/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const arr = haystack.split(needle);
    if(arr.length > 1){
        return arr[0].length;
    }
    return -1;
};