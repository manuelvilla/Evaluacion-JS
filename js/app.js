/*
General. Permitir realizar las 4 operaciones básicas entre dos números racionales, esto quiere decir que los números pueden ser naturales, enteros negativos, o decimales.

El mayor número de dígitos por cada operando y del resultado es 8.

Los resultados de todas las operaciones deben mostrarse sólo cuando se presione la tecla igual (=)

Permitir realizar operaciones en cadena, es decir que el resultado de una operación puede ser el primer operando de una operación siguiente.

Permitir la secuencia de operaciones al presionar el botón igual (=) consecutivamente después de una operación, repitiendo la operación y el segundo operando sobre el resultado obtenido.

4. Para efectos de este proyecto sólo realizaremos las 4 operaciones básicas: suma, resta, multiplicación y división. El botón que indica raíz cuadrada sólo hace parte del diseño general de la calculadora y no es necesario que lo implementes.

6. Crea un método que al presionar el botón ON/C se borren los números que estén en pantalla y se muestre sólo el número cero.

7. Crea un método que al presionar la tecla del punto, lo añada a la derecha del número actual que se muestra en pantalla. Debes verificar si el punto ya está o no en pantalla para no adicionarlo más de una vez.

8. Debes crear un método que añada el signo negativo al presionar la tecla +/- a un número en pantalla. Si el número sólo es un cero, no se debe agregar el signo, además debes verificar que si el signo menos ya está en pantalla, al presionar la tecla se borre.

9. Realiza una validación para la pantalla, en la que sólo se puedan mostrar 8 dígitos. Si el número digitado, o el resultado de una operación posee un mayor número de dígitos, se deben mostrar sólo sus primeros 8 dígitos.

10. El objeto Calculadora debe implementar las cuatro operaciones matemáticas básicas, de tal manera que al presionar un número y el signo aritmético, la pantalla quede vacía para indicar que la calculadora está en medio de una operación. Posteriormente se muestra el segundo número de la operación en pantalla. Para realizar la operación, debes asignar los métodos necesarios para que al presionar el botón igual, se ejecute el procedimiento correspondiente. Debes realizar métodos que reciban parámetros y retornan valores.:

*/

	//Declaración de variables más importantes
	var num1 = 0; //Número 1
	var num2 = 0; //Número 2
	var operacion = ''; //Operaciones a realizar
	var guardarNum = '0';
	var iniciarNum = 1;
	var puntoDec = 0;

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
		var display = document.getElementById('display');

		//Eventos onclick para cada botón
		division.onclick = function(num1, num2){
			Calculadora.imprimirPantalla('/');
			return num1/num2;
		};
		multiplicacion.onclick = function(e){
			Calculadora.imprimirPantalla('*');
		};
		suma.onclick = function(e){
			Calculadora.imprimirPantalla('+');
		};
		resta.onclick = function(e){
			Calculadora.imprimirPantalla('-');
		};
		onC.onclick = function(e){
			console.log('C');
		};
		igual.onclick = function(e){
			Calculadora.imprimirPantalla('=');
		};
		punto.onclick = function(e){
			Calculadora.imprimirPantalla('.');
		};
		cero.onclick = function(e){
			console.log('0');
			Calculadora.imprimirPantalla(0);
		};
		uno.onclick = function(e){
			console.log('1');
			Calculadora.imprimirPantalla(1);
		};
		dos.onclick = function(e){
			console.log('2');
			Calculadora.imprimirPantalla(2);
		};
		tres.onclick = function(e){
			console.log('3');
			Calculadora.imprimirPantalla(3);
		};
		cuatro.onclick = function(e){
			console.log('4');
			Calculadora.imprimirPantalla(4);
		};
		cinco.onclick = function(e){
			console.log('5');
			Calculadora.imprimirPantalla(5);
		};
		seis.onclick = function(e){
			console.log('6');
			Calculadora.imprimirPantalla(6);
		};
		siete.onclick = function(e){
			console.log('7');
			Calculadora.imprimirPantalla(7);
		};
		ocho.onclick = function(e){
			console.log('8');
			Calculadora.imprimirPantalla(8);
		};
		nueve.onclick = function(e){
			console.log('9');
			Calculadora.imprimirPantalla(9);
		};
	
		//Inicialización de métodos
		this.botonTamano();
		this.botonOnc();
		this.botonPunto();
		this.botonNegativo();
	},
	
	botonTamano: function(){ //Método de efecto para onclick en botones
 		var imagenes = document.getElementsByClassName('teclado')[0].getElementsByTagName('img');
		for (var i = 0; i < imagenes.length; i++){
			imagenes[i].addEventListener('click', function(){
				this.style.transform='scale(0.9)';
				var imagenes2 = this;
				setTimeout(function(){
					imagenes2.style.transform='scale(1)';
				}, 100);
			});
		}		
	},
	imprimirPantalla: function(valor){ //Método que imprime botones en pantalla (5.  Debes verificar si en la pantalla se encuentra sólo el número cero, que no se puedan agregar más números cero. Además debes hacer que si en pantalla está sólo el cero, al presionar otro número diferente, éste debe reemplazar al cero inicial.)
		if (guardarNum=='0'||iniciarNum==1){ //Recoger número e inicializar
			display.innerHTML=valor; //mostrar en pantalla
			guardarNum=valor; 
		}else {
			display.innerHTML+=valor; //Concatenar números
			guardarNum+=valor;
		}
		iniciarNum=0;
	},
	verificarCeros: function(valor){ //Método para verificar si hay 0 y concatenar los siguientes números
		
		
	},
	botonOnc: function(){ //Método para borrar números y mostrar el número 0
		this.botonOnc = 0;
	},
	botonPunto: function(){ //Método para el botón de punto y concatenar números
		this.botonPunto = 0;
	},
	botonNegativo: function(){ //Método para agregar el signo negativo a la izquierda de los números
		this.botonNegativo = 0;
	},
										 
};

Calculadora.init();