let x = Number.MAX_SAFE_INTEGER;
document.getElementById("demo1").innerHTML = x;
let X = Number.MAX_SAFE_INTEGER;
document.getElementById("demo2").innerHTML = X;
let a = Number.MIN_SAFE_INTEGER;
document.getElementById("demo3").innerHTML = a;
document.getElementById("demo4").innerHTML =
    Number.isInteger(10) + "<br>" + Number.isInteger(10.5);
document.getElementById("demo5").innerHTML =
    Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);