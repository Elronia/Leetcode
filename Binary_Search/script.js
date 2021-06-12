//Input: nums = [-1,0,3,5,9,12], target = 9
//Output: 4

/* 
  0 1 2 3 4  5
[-1,0,3,5,9,12]           (0 + 5) / 2 = 2,5 ~ 2 -> mid
  ^          ^
 left      right          (3 + 5) / 2 = 4 -> mid
        ^

 0  1  2  3  4
[1, 2. 3, 4, 5] , target = 2       
 ^           ^    (0 + 4) / 2 = 2           (1 + 1) / 2 = 1
    ^             (0 + 1) / 2 = 0,5 ~ 0     return 1

 */

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  
  return -1;

};    