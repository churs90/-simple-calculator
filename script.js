
var p = document.getElementsByTagName('p')[2];
var result;

function plus() {
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    result = parseFloat(one) + parseFloat(two);
    p.innerHTML = ' Результат: ' + result;
}

function minus() {
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    result = parseFloat(one) - parseFloat(two);
    p.innerHTML = ' Результат: ' + result;
}

function umn() {
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    result = parseFloat(one) * parseFloat(two);
    p.innerHTML = ' Результат: ' + result;
}

function razd() {
    var one = document.getElementById('one').value;
    var two = document.getElementById('two').value;
    if (parseFloat(one) == 0 || parseFloat(two) == 0) {
        alert ('на 0 делить нельзя');
    }
    result = parseFloat(one) / parseFloat(two);
    p.innerHTML = ' Результат: ' + result;
}