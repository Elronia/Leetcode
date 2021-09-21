var sortArrayByParity = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l < r) {
        if (nums[l] % 2 !== 0) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            r--;
        // if nums[l] is even
        } else {
            l++;
        }
    }
    
    return nums;
};