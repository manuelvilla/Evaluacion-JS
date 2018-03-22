//Declaración de variables más importantes
var num1 = 0; //Número 1
var num2 = 0; //Número 2
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
		
		//Eventos onclick para cada botón
		onC.onclick = function(e){
			resetC();
		};
		masMenos.onclick = function(e){
			menosBoton();
		};
		division.onclick = function(e){
			num1 = igual.textContent;
			operacion = '/';
			borrar();
		};
		multiplicacion.onclick = function(e){
			num1 = igual.textContent;
			operacion = '*';
			borrar();
		}
		suma.onclick = function(e){
			num1= igual.textContent;
			operacion = '+';
			borrar();
		}
		resta.onclick = function(e){
			num1= igual.textContent;
			operacion = '-';
			borrar();
		}
		punto.onclick = function(e){
			colocarPunto();
		}
		igual.onclick = function(e){
			num2 = igual.textContent;
			operar();
		}
		cero.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "0";
		}
		uno.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "1";
		}
		dos.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "2";
		}
		tres.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "3";
		}
		cuatro.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "4";
		}
		cinco.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "5";
		}
		seis.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "6";
		}
		siete.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "7";
		}
		ocho.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "8";
		}
		nueve.onclick = function(e){
      	resultado.textContent = resultado.textContent  + "9";
		}
		this.botonTamano(); //Inicializar método Tamaño de Botones onclick
	},
	
	botonTamano: function(){ //Método de efecto para onclick en botones
 		var imagenes = document.getElementsByClassName('teclado')[0].getElementsByTagName('img');
		for (var i = 0; i < imagenes.length; i++){
			imagenes[i].addEventListener('click', function(){
				this.style.transform='scale(0.9)';
				var imagenes2 = this
				setTimeout(function(){
					imagenes2.style.transform='scale(1)';
				}, 100);
			});
		}		
	},
										 
};

Calculadora.init();