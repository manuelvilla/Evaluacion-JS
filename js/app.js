/*
General. Permitir realizar las 4 operaciones básicas entre dos números racionales, esto quiere decir que los números pueden ser naturales, enteros negativos, o decimales.

El mayor número de dígitos por cada operando y del resultado es 8.

Los resultados de todas las operaciones deben mostrarse sólo cuando se presione la tecla igual (=)

Permitir realizar operaciones en cadena, es decir que el resultado de una operación puede ser el primer operando de una operación siguiente.

Permitir la secuencia de operaciones al presionar el botón igual (=) consecutivamente después de una operación, repitiendo la operación y el segundo operando sobre el resultado obtenido.

6. Crea un método que al presionar el botón ON/C se borren los números que estén en pantalla y se muestre sólo el número cero.

9. Realiza una validación para la pantalla, en la que sólo se puedan mostrar 8 dígitos. Si el número digitado, o el resultado de una operación posee un mayor número de dígitos, se deben mostrar sólo sus primeros 8 dígitos.

10. El objeto Calculadora debe implementar las cuatro operaciones matemáticas básicas, de tal manera que al presionar un número y el signo aritmético, la pantalla quede vacía para indicar que la calculadora está en medio de una operación. Posteriormente se muestra el segundo número de la operación en pantalla. Para realizar la operación, debes asignar los métodos necesarios para que al presionar el botón igual, se ejecute el procedimiento correspondiente. Debes realizar métodos que reciban parámetros y retornan valores.:

*/

	//Declaración de variables más importantes
	var num1 = 0; //Número 1
	var num2 = 0; //Número 2
	var operacion = ''; //Operaciones a realizar
	var guardarNum = '0'; //Guardar número en pantalla
	var iniciarNum = 1; //Estado de número 0=no y 1=si
	var punto = 0; //Estado de punto 0=no y 1=si
	var numeroOp = 0; //Número en espera
	var operacionAc='no'; //Estado de operación activa 0=no 1=si

var Calculadora = { //Objeto Calculadora
		
	init: function(){//Método de inicialización
		//Declaración de variables botones y obtención con ID
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
		var raizC = document.getElementById('raiz');

		//Eventos onclick para cada botón
		masMenos.onclick = function(){
			Calculadora.botonNegativo();
		};
		raizC.onclick = function (e){
			Calculadora.botonRaiz();
		};
		division.onclick = function(e){
			Calculadora.operaciones('/');
		};
		multiplicacion.onclick = function(e){
			Calculadora.operaciones('*');
		};
		suma.onclick = function(e){
			Calculadora.operaciones('+');
		};
		resta.onclick = function(e){
			Calculadora.operaciones('-');
		};
		onC.onclick = function(e){
			console.log('C');
		};
		igual.onclick = function(){
			Calculadora.botonIgual();
		};
		punto.onclick = function(e){
			Calculadora.imprimirPantalla('.');
		};
		cero.onclick = function(e){
			Calculadora.imprimirPantalla(0);
		};
		uno.onclick = function(e){
			Calculadora.imprimirPantalla(1);
		};
		dos.onclick = function(e){
			Calculadora.imprimirPantalla(2);
		};
		tres.onclick = function(e){
			Calculadora.imprimirPantalla(3);
		};
		cuatro.onclick = function(e){
			Calculadora.imprimirPantalla(4);
		};
		cinco.onclick = function(e){
			Calculadora.imprimirPantalla(5);
		};
		seis.onclick = function(e){
			Calculadora.imprimirPantalla(6);
		};
		siete.onclick = function(e){
			Calculadora.imprimirPantalla(7);
		};
		ocho.onclick = function(e){
			Calculadora.imprimirPantalla(8);
		};
		nueve.onclick = function(e){
			Calculadora.imprimirPantalla(9);
		};
	
		//Inicialización de métodos
		this.botonTamano();
		this.botonOnc();
		this.botonNegativo();
	},
	
	botonTamano: function(){ //Método de efecto para onclick en botones
 		var imagenes = document.getElementsByClassName('teclado')[0].getElementsByTagName('img'); //Obtenemos la clase teclado 0 y etiquetas img
		for (var i = 0; i < imagenes.length; i++){
			imagenes[i].addEventListener('click', function(){
				this.style.transform='scale(0.9)'; //Hacer el tamaño original al 90% en el click
				var imagenes2 = this;
				setTimeout(function(){
					imagenes2.style.transform='scale(1)';
				}, 100); //Regresar al tamaño original en 0.1 segundos
			});
		}		
	},
	imprimirPantalla: function(valor){
		if (guardarNum=="0" || iniciarNum==1  ) {	// inicializar un número 
            display.innerHTML=valor; //mostrar en pantalla
            guardarNum=valor; //guardar número
            if (valor==".") { //si escribimos una punto al principio del número
               display.innerHTML="0."; //escribimos 0 y después el punto
               guardarNum=valor; //guardar número
               punto=1; //cambiar estado del punto
               }
           }
           else { //continuar escribiendo un número
               if (valor=="." && punto==0) { //si escribimos un punto por primera vez
                   display.innerHTML+=valor;
                   guardarNum+=valor;
                   punto=1; //cambiar el estado del punto  
               }
               //si intentamos escribir un segundo punto no realiza ninguna acción.
               else if (valor=="." && punto==1) {} 
               //Resto de casos: escribir un número del 0 al 9: 	 
               else {
                   display.innerHTML+=valor;
                   guardarNum+=valor
               }
            }
            iniciarNum=0 //el número está iniciado
	},
	operaciones: function(operador){
		Calculadora.botonIgual();
		numeroOp = guardarNum;
		operacionAc = operador;
		iniciarNum=1;
	},
	botonIgual: function(){
		if (operacionAc=='no'){ //Sin operaciones guardadas
			display.innerHTML=guardarNum; //Se muestra el número actual
		} else {
			var cadena=numeroOp+operacionAc+guardarNum; //Resolver numero 1 operador y numero 2
			var solucion=eval(cadena); //String a número en solución
			display.innerHTML=solucion; //Mostrar en pantalla el resultado
			guardarNum=solucion; //Número guardado es solución
			operacionAc='no';//Sin operaciones guardadas
			iniciarNum=1; //Reiniciar pantalla
		}
	},
	botonRaiz: function(){ //Raíz Cuadrada
		guardarNum=Math.sqrt(guardarNum); //Número pulsado y su raíz 2
		display.innerHTML=guardarNum; //Mostraren pantalla
		operacionAc='no';
		iniciarNum=1;
	},
	botonOnc: function(){ //Método para borrar números y mostrar el número 0
		this.botonOnc = 0;
	},
	botonNegativo: function(){ //Método para agregar el signo negativo a la izquierda de los números
		var numeroNeg = Number(guardarNum);
		numeroNeg = -numeroNeg; //Cambiar signo
		guardarNum = String(numeroNeg); //to String
		display.innerHTML=guardarNum; //Mostrar en pantalla
	},
										 
};

Calculadora.init();