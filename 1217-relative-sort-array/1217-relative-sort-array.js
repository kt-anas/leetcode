 /**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    function rank(mp, a) {
        return mp.hasOwnProperty(a) ? mp[a] : Object.keys(mp).length;
    }
    const mp = {};
    arr2.forEach((num, i) => {
        mp[num] = i;
    });
    arr1.sort((a, b) => {
        const rankA = rank(mp, a);
        const rankB = rank(mp, b);
        if (rankA === rankB) {
            return a - b;
        }
        return rankA - rankB;
    });

    return arr1;
};