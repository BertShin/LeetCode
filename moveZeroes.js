// Given an array nums, write a function to move all 0's to the end of it 
// while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12]
// [0, 0, 0, 1]
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


const moveZeroes = (nums) => {

    if (nums.length > 1) {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] === 0) {
                nums.splice(i, 1);
                nums.push(0);
            }
        }
    }

    return nums;
};

moveZeroes([0, 1, 0, 1]);
