/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(n, t) {
    for(let i=1;i<n.length;i++){
        for(let j=i;j<n.length;j++){
            if(n[j] + n[j-i] ===t){
                return [j-i,j]
            }
        }
    }
    return []
};