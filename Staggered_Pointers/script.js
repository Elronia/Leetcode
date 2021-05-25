/*
- Input: array of intergers - [1,1,2] or [0,0,1,1,1,2,2,3,3,4]
- Sorted in increasing order
- In-place modification
- Output: 2, nums = [1,2] or 5, nums = [0,1,2,3,4]
*/
var removeDuplicates = function(nums) {
    let l = 0; // non-duplicate value index
    let r = 1;
    
    while (r < nums.length) {
        if (nums[l] !== nums[r]) {
            l += 1;
            const temp = nums[l]; // store the temporary variable for your left pointer
            nums[l] = nums[r];  // change the left pointer to the right pointer
            nums[r] = temp;    // assign your right to the temporary
            // [nums[l], nums[r]] = [nums[r], nums[l]];
        }
        r += 1; // r ++;
    }

    return l + 1;  // left (non-duplicate) index + 1
};

/* 
// using for loop

function removeDuplicates(nums) {
    let l = 0;
    for (let r = 1; r < nums.length; r++) {
        if (nums[l] !== nums[r]) {
            l += 1;
            [nums[l], nums[r]] = [nums[r], nums[l]];
        }
    }
    return l + 1;
}; 
*/

/* Pseudocode:
1) Set our pointers: left - points to the 1st index of the array, right - to the following index
2) Move the right pointer to the position until we don't have duplicates
           |
             |
For Input [1,1,2]:
- 1 == 1
- 1 != 2
*/