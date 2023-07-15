function updateExpression(value) {
    document.getElementById("expression").value += value;
}

function clearExpression() {
    document.getElementById("expression").value = "";
    document.getElementById("result").value = "";
}

function backspace() {
    var expression = document.getElementById("expression").value;
    document.getElementById("expression").value = expression.slice(0, -1);
}

function factorial() {
    var number = parseInt(document.getElementById("expression").value);
    if (number === 0 || number === 1) {
        document.getElementById("result").value = 1;
    } else {
        var result = 1;
        for (var i = 2; i <= number; i++) {
            result *= i;
        }
        document.getElementById("result").value = result;
    }
}

function calculateSine() {
    var expression = document.getElementById("expression").value;
    var angleInDegrees = eval(expression);
    var angleInRadians = angleInDegrees * (Math.PI / 180);
    var result = Math.sin(angleInRadians);
    document.getElementById("result").value = result;
}

function calculateCosine() {
    var expression = document.getElementById("expression").value;
    var angleInDegrees = eval(expression);
    var angleInRadians = angleInDegrees * (Math.PI / 180);
    var result = Math.cos(angleInRadians);
    document.getElementById("result").value = result;
}
function calculateNaturalLogarithm() {
    var expression = document.getElementById("expression").value;
    var value = eval(expression);
    var result = Math.log(value);
    document.getElementById("result").value = result;
}

function calculateSquareRoot() {
    var expression = document.getElementById("expression").value;
    var value = eval(expression);
    var result = Math.sqrt(value);
    document.getElementById("result").value = result;
}

function calculateExponential() {
    var expression = document.getElementById("expression").value;
    var value = eval(expression);
    var result = Math.exp(value);
    document.getElementById("result").value = result;
}

function calculateInverse() {
    var expression = document.getElementById("expression").value;
    var value = eval(expression);
    var result = 1 / value;
    document.getElementById("result").value = result;
}

function calculateTangent() {
    var expression = document.getElementById("expression").value;
    var angleInDegrees = eval(expression);
    var angleInRadians = angleInDegrees * (Math.PI / 180);
    var result = Math.tan(angleInRadians);
    document.getElementById("result").value = result;
}

function calculatePi() {
    var result = Math.PI;
    document.getElementById("result").value = result;
}

function calculateE() {
    var result = Math.E;
    document.getElementById("result").value = result;
}
function calculateLogarithm() {
    var expression = document.getElementById("expression").value;
    var result = Math.log10(eval(expression));
    document.getElementById("result").value = result;
}

function toDegrees() {
    var expression = document.getElementById("expression").value;
    var degrees = eval(expression);
    var radians = degrees * (Math.PI / 180);
    document.getElementById("result").value = radians;
}

