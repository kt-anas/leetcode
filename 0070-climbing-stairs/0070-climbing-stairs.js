/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
     let an=[1,2];
     for(let i=2;i<n;i++){
        an[i]=an[i-1]+an[i-2];
     }
     return an[n-1]
};