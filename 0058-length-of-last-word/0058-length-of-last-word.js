/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     let len =0;

    for(let i=0; i< s.length; i++) {
        if(s[i]!= ' ') {
            if(s[i-1] == ' ') 
                len = 1;
            else
                len = len +1;
        }
    }
    return len;
};