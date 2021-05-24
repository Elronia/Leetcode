/* 
- two Sum takes in two parameters: numbers = [2,7,11,15], target = 9. 
- Outputs an array [1, 2], output array is 1-indexed.
- Indices start with 1
- Sorted in increasing order
- Exactly one solution
- May not use same element twice
*/

var twoSum = function(numbers, target) { 
    let pointerLeft = 0;
    let pointerRight = numbers.length - 1;
    
    while (pointerLeft < pointerRight) {
        const sum = numbers[pointerLeft] + numbers[pointerRight];
        
        if (sum > target) {
            pointerRight -= 1; // pointerRight --;
        } else if (sum < target) {
            pointerLeft += 1;
        } else {
            return [pointerLeft + 1, pointerRight + 1];
        }
    }
};

/* 
 |    
   |
[2,7,11,15] target = 9

 1) declare pointers
 2) while loop
 3) declare a variable sum 
 4) if sum is greater than the target, move pointer to the left
    2 + 15 = 17, 17 > 9
    2 + 11 = 13. 13 > 9
    2 + 7 = 9, 9 == 9, target is reached! 
    Answer is [1, 2]
*/ 