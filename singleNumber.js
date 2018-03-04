// Given an array of integers, every element appears twice except for one.Find that single one.
// NB: Your algorithm should have a linear runtime complexity. 
    // Could you implement it without using extra memory?


const singleNumber = (array) => {
    // CONSTANT MEMORY
    // LINEAR RUNTIME
    // This just screams pointer to me.
    // I could start two pointers, one at each end of the array,
    // Compare numbers adjacent to the pointers, if the number is not equal: bingo we found our match!
    // This would be linear time since at most we'd only iterate over the array once.
    // AND constant space since all we're storing are pointers and no additional data structures.
    array = array.sort();
    let start = 0;

    if (array.length === 1) {
        return array[0];
    }
    

    while (start !== array.length) {
        if (array[start] !== array[start + 1]) {
            return array[start];
        } else {
            start += 2;
        }
    }

    return false;
};