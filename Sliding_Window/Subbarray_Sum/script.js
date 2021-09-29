/* Using Sliding Window pattern */
var minSubArrayLen = function(target, nums) {
    let windowStartIdx = 0;
    let windowEndIdx = 0;
    let windowSum = 0;
    let minSize = Infinity;
    
    while (windowEndIdx < nums.length) {
        windowSum += nums[windowEndIdx];
        
        while (windowSum >= target) {
            const curWindowSize = windowEndIdx - windowStartIdx + 1;
            minSize = Math.min(minSize, curWindowSize);
            windowSum -= nums[windowStartIdx];
            windowStartIdx += 1;
        }
        
        windowEndIdx += 1;
    }
    
    if (minSize === Infinity) return 0;
    return minSize;
};