// var reverseString = function(s) {
//     if (s.length == 0) {
//         return;
//     }
//     var temp = s[0];
//     s.shift(); // remove + return the first element
//     reverseString(s);
//     s.push(temp);
// };

// var reverseString = function(s) {
//     //input: string[] a string of letters
//     //output: string[] a string of letters in reverse order
//     let left = 0;
//     let right = s.length - 1;
    
//     while(left < right) {
//         //swap array at left position with array at right position
//         [s[left], s[right]] = [s[right], s[left]];
//         left ++;
//         right --;
//     }
//     return s;
// };

var reverseString = function(s) {
    //input: string[] a string of letters
    //output: string[] a string of letters in reverse order
    let left = 0;
    let right = s.length - 1;
    
    for(let left = 0; left < right; left ++) {
        //swap array at left position with array at right position
        [s[left], s[right]] = [s[right], s[left]];
        right --;
    }
    return s;
};