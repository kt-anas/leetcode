/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
     let counter = 0
    for (let num of nums) {
        if (num === target) {
           
            return counter
        }
        else if (counter === nums.length - 1) {
            return -1
        }else{
         counter++
        }
    }
};