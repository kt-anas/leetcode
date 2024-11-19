/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
 const totalLen = nums1.length + nums2.length;let x = 0;
let y = 0;
const mergedArr = []
for(let i=0; i< totalLen;i++){

if(x> nums1.length -1){  nums2.splice(0, y)
     mergedArr.push(...nums2)
      break; }

       if(y> nums2.length -1){
            nums1.splice(0, x)
            mergedArr.push(...nums1)
           break;
       }

       if(nums1[x] > nums2[y]){
           mergedArr.push(nums2[y]);
           y++;
           continue;
       }else{
           mergedArr.push(nums1[x]);
           x++;
           continue;
       }

   }

   if(totalLen % 2 === 0){
       return (mergedArr[totalLen/2] +  mergedArr[totalLen/2 -1]) /2
   }else{
       return mergedArr[(totalLen-1)/2]
   }

};