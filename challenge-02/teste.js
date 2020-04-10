function math(x, y, c) {
    var num1 = false;
    var num2 = false;
    var num3 = false;

    if (x != undefined) {
        num1 = x;
    }
    if (y != undefined) {
        num2 = y;
    }
    if (c != undefined) {
        num3 = c;
    }
    if (num1 == false && num2 == false && num3 == false) {
        return false;
    } else {
        return num1 + num2 - num3;
    }
    
}

console.log(math());
