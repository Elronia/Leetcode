// var reverseString = function(s) {
//     if (s.length == 0) {
//         return;
//     }
//     var temp = s[0];
//     s.shift(); // remove + return the first element
//     reverseString(s);
//     s.push(temp);
// };

var reverseString = function(s) {
    helper(0, s.length - 1, s);
    return;
};

function helper(l, r, array) {
    // base case
    if (l >= r) return;

    // swap characters at l and r index
    // const temp = array[l];
    // array[r] = array[l];
    // array[l] = temp;
    [array[l], array[r]] = [array[r], array[l]];

    //make recursive call
    helper(l + 1, r - 1, array);
    return;
}