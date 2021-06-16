var reverseString = function(s) {
    if (s.length == 0) {
        return;
    }
    var temp = s[0];
    s.shift(); // remove + return the first element
    reverseString(s);
    s.push(temp);
};