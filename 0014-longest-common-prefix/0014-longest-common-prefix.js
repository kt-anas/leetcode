
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if(strs.length == 1){
        return strs[0]
    }
    let min_str = Infinity
    strs.forEach((str)=>{
        if(str.length<min_str){
            min_str = str.length
        }
    })
    let window = 0;
    let ans = ""
    while (min_str>0) {
        let temp = strs[0][window]
        let temp_ans = ''
        for (let char of strs) {
            if(temp===char[window]){
                temp_ans = temp;
            }else{
                return ans
            }
        }
        window++
        ans += temp_ans
        min_str--
    }
    return ans
};