/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let persentCount = init;
    
function increment(){
    return ++persentCount;
}

function decrement(){
    return --persentCount;
}

function reset(){
    return (persentCount = init);

}

return {increment,decrement,reset};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */