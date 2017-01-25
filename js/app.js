function numbers() {
    var x = document.getElementById('firstNumber').value;
    var y = document.getElementById('secondNumber').value;
    var z = Math.max(parseInt(x), parseInt(y));
    return String(z);
}
;
$('#determine').on("click", function (event) {
    $('#largestNumber').html(numbers());
});
function words() {
    var a = document.getElementById('firstWord').value;
    var b = document.getElementById('secondWord').value;
    if (a.length < b.length) {
        return a;
    }
    else {
        return b;
    }
}
;
$('#determine2').on("click", function (event) {
    $('#largestNumber').html(words());
});
function rollem(s, d) {
    console.log(s);
    console.log(d);
    var roll = 0;
    var i = 1;
    while (i <= d) {
        var rannie = Math.floor(Math.random());
        roll = roll + (rannie * d) + 1;
        i++;
    }
    return String(roll);
}
$('#rollem').on("click", function (event) {
    var sides = parseInt(document.getElementById('numSides').value);
    var dice = parseInt(document.getElementById('numDice').value);
    $('#result').html(rollem(sides, dice));
});
//# sourceMappingURL=app.js.map