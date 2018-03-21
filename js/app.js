//Declaración de variables más importantes
var num1 = ; //Número 1
var num2 = ; //Número 2
var operacion ; //Operaciones a realizar

var Calculadora = { //Objeto Calculadora
	
	init: function(){//Método de inicialización
		//Declaración de variables botones
		var onC = document.getElementById('on');
		var masMenos = document.getElementById('sign');
		var division = document.getElementById('dividido');
		var multiplicacion = document.getElementById('por');
		var resta = document.getElementById('menos');
		var suma = document.getElementById('mas');
		var igual = document.getElementById('igual');
		var punto = document.getElementById('punto');
		var cero = document.getElementById('0');
		var uno = document.getElementById('1');
		var dos = document.getElementById('2');
		var tres = document.getElementById('3');
		var cuatro = document.getElementById('4');
		var cinco = document.getElementById('5');
		var seis = document.getElementById('6');
		var siete = document.getElementById('7');
		var ocho = document.getElementById('8');
		var nueve = document.getElementById('9');
	}

}


document.getElementsByClassName('teclado')[0].getElementsByTagName('img').onclick = presionarBoton;
//teclas width:23% a 21% y height:18% a 17%
