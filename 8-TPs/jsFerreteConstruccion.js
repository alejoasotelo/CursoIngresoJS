/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var app = angular.module('FerreteConstruccion', []);

app.controller('controladorFC', function($scope){

	$scope.usuario = {};

	$scope.Rectangulo = function(){

		var perimetro = ($scope.usuario.largo * 2) +
						($scope.usuario.ancho * 2);

		// Multiplico por 3 hilos de alambre.
		var cant_alambre = perimetro * 3;

		alert('Necesita '+cant_alambre+'mts de alambre.');

	}

	$scope.Circulo = function(){

		var perimetro = 2 * Math.PI * $scope.usuario.radio;

		// Multiplico por 3 hilos de alambre.
		var cant_alambre = perimetro * 3;

		alert('Necesita '+cant_alambre+'mts de alambre.');

	}

	$scope.Materiales = function(){

		// Averiguo la superficio (mts^2);
		var superficie = $scope.usuario.largo * $scope.usuario.ancho;



	}

});