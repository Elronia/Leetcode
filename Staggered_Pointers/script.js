/*
- Input: array of intergers - [1,1,2] or [0,0,1,1,1,2,2,3,3,4]
- Sorted in increasing order
- In-place modification
- Output: 2, nums = [1,2] or 5, nums = [0,1,2,3,4]
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