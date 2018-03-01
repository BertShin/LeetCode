const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        let j = nums.indexOf(target-nums[i], i+1);

        if (j > -1 && j !== i) {
            return [i, j];
        }
    }
    
    return false;

};


