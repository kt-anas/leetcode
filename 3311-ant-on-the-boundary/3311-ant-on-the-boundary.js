/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let debounce = 0;
    let flexid = [];
    flexid[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
      flexid[i] = flexid[i - 1] + nums[i]

      if (flexid[i] === 0) {
        debounce++
      }
    }

    return debounce
};