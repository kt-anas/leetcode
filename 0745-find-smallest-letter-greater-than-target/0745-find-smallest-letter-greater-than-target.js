/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for(let c of letters){
        
        if(c>target) return c
           
    } 
    return letters[0]
};