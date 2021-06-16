// var fib = function(n) {
//     if(n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
// };

var fib = function(n) {
    if(n < 2) return n;
    return fib(n - 1) + fib(n - 2);
};
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34