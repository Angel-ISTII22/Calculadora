

var num1

var num2

num1 = document.getElementById("1").value;
num2 = document.getElementById("2").value;
//eventos
suma.onclick = function sumar(valor) {

    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    var suma = parseInt(num1) + parseInt(num2);
    document.getElementById('resultado').innerHTML = suma;

}
resta.onclick = function resta(valor) {

    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    var resta = parseInt(num1) - parseInt(num2);
    document.getElementById('resultado').innerHTML = resta;

}
multiplicacion.onclick = function multiplicacion(valor) {

    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    var multiplicacion = parseInt(num1) * parseInt(num2);
    document.getElementById('resultado').innerHTML = multiplicacion;

}
division.onclick = function resta(valor) {

    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    var division = parseInt(num1) / parseInt(num2);
    document.getElementById('resultado').innerHTML = division;
    document.getElementById("resultado2").innerHTML = division;

}
clean.onclick = function clean(valor) {

    document.getElementById("1").value = "";
    document.getElementById("2").value = "";
    document.getElementById("resultado").innerHTML = "";
    suma = 0;
    resta = 0;
    multiplicacion = 0;
    division = 0;
    num1 = "";
    num2 = "";

}

