/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var app = angular.module('AgilidadAritmetica1', []);

app.controller('controladorAA1', function($scope){

	var operaciones = ['+', '-', '*', '/'];

	$scope.juego = {};

	$scope.comenzar = function(){

		$scope.juego.numeros = $scope.generarNumerosYOperador();

		$scope.juego.respuesta_usuario = null;

	}

	$scope.generarNumerosYOperador = function(){

		return {
			uno: $scope.generarNumeroRandomEntre(1, 10),
			dos: $scope.generarNumeroRandomEntre(1, 10),
			operador: operaciones[$scope.generarNumeroRandomEntre(0, 3)]
		}

	}

	$scope.generarNumeroRandomEntre = function(min, max){

		return Math.floor(Math.random() * (max - (min - 1) ) ) + min;

	}

	$scope.responder = function(){

		var resultado = $scope.calcularResultado();

		if ($scope.juego.respuesta_usuario == resultado)
			alert('¡Respuesta acertada!');
		else
			alert('Respuesta equivocada. El resultado correcto es: ' + resultado);

		$scope.comenzar();

	}

	$scope.calcularResultado = function(){

		var resultado = 0;

		if ($scope.juego.numeros.operador == '+')
			resultado = ($scope.juego.numeros.uno + $scope.juego.numeros.dos);
		else if ($scope.juego.numeros.operador == '-')
			resultado = ($scope.juego.numeros.uno - $scope.juego.numeros.dos);
		else if ($scope.juego.numeros.operador == '*')
			resultado = ($scope.juego.numeros.uno * $scope.juego.numeros.dos);
		else if ($scope.juego.numeros.operador == '/')
			resultado = ($scope.juego.numeros.uno / $scope.juego.numeros.dos);

		return Math.floor(resultado);

	}

});