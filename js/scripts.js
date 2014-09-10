//Practicas con JS

//Declaración de variables Globales

var variableGlobal = 10;

//Cración de funciones
 /* miFuncion = function(par, pare){
	var variableLocal = 20;
	var suma = variableGlobal + variableLocal + par;
	var resultado = pare + suma;

	document.write(resultado);

	console.log("variableGlobal" + "+" + "variableLocal");
};

miFuncion(10, "La suma de las variables es igual a: ");
*/

//Practica de funciones

//Practica 1

/*function funcionUno(resul){
	var valorUno = parseInt(prompt("Introduzca el primer valor: "));
	var valorDos = parseInt(prompt("Introduzca el segundo valor: "));
	var valorTres = parseInt(prompt("Introduzca el tercer valor: "));

	var suma = (valorUno + valorDos + valorTres + "<br />");
	var resta = (valorUno - valorDos - valorTres + "<br />");
	var promedio = (valorUno + valorDos + valorTres) / 3;

	document.write("El resultado de la suma es: " + suma);
	document.write("El resultado de la resta es: " + resta);
	document.write("El promedio es: " + promedio);
}

funcionUno();
*/

//Practica 2

function ingesta(){
	var estado = parseInt(prompt("Si es sedentario elija 1" + "\n" + "Si hace ejercicio moderado elija 2" + "\n"+ "Si es muy activo elija 3"));
	var peso = parseInt(prompt("Introduzca su peso: "));

	if (estado == 1){
		var resul1 = peso * 0.5;
		alert("Tiene que consumir " + resul1);
	}

	else if (estado == 2){
		var resul2 = peso * 1.2;
		alert("Tiene que consumir " + resul2);
	}

	else if (estado == 3){
		var resul3 = peso * 1.7;
		alert("Tiene que consumir " + resul3);
	}
}

//ingesta();

//Practica 3

function acceso(){

	var id = parseInt(prompt("Introduzca su edad: "));

	if (id < 18){
		alert("La página donde esta intentando acceder es solo para mayores de 18 años. Por favor, abondone la página");
	}

	else {
		alert("Bienvenido a nuestra página");
	}
}

acceso();