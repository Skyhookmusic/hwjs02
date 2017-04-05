var n = Number(prompt("1)Insert number of fibonacci sequence:"));
function fib(n) {
    var a = 1;
    var b = 1;
    var c = 0;
    for (var i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert(fib(n));

var n2 = Number(prompt('2)Insert number of fibonacci sequence:'));
document.write('n-ne fib = ' + fib2(n2));
function fib2(n2) {
    if (n2 <= 1)
        return n2;
    return n2 = fib2(n2 - 1) + fib2(n2 - 2);
}



