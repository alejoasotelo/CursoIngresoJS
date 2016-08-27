/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
var app = angular.module('AdivinaElNumero2', []);

app.controller("controladorADV2", function($scope){

	$scope.juego = {};

	$scope.comenzar = function(){

		$scope.resetearRespuestaIngresada();
		$scope.juego.resp_correcta = Math.floor(Math.random()*100);
		$scope.juego.intentos = null;

	}

	$scope.verificar = function(){

		if ($scope.juego.resp_ingresada == $scope.juego.resp_correcta)
		{
			$scope.mostrarMensajeSegunIntentos($scope.juego.intentos);
			$scope.comenzar();
		}
		else
		{
			if ($scope.juego.resp_ingresada > $scope.juego.resp_correcta)
				alert('Te pasaste...');
			else
				alert('Te falto...');

			$scope.resetearRespuestaIngresada();

			$scope.juego.intentos = $scope.juego.intentos == null ? 1 : $scope.juego.intentos+1;

		}
	};

	$scope.mostrarMensajeSegunIntentos = function (intentos){

		if (intentos == 1)
			alert('¡Usted es un Psíquico!');
		else if (intentos == 2)
			alert('¡Excelente percepción!');
		else if (intentos == 3)
			alert('¡Esto es suerte!');
		else if (intentos == 4)
			alert('¡Excelente técnica!');
		else if (intentos == 5)
			alert('¡Usted está en la media!');
		else if (intentos >= 6 && intentos <= 10)
			alert('¡Falta técnica!');
		else if  (intentos > 10)
			alert('¡Afortunado en el amor!');
	}

	$scope.resetearRespuestaIngresada = function(){

		$scope.juego.resp_ingresada = null;

	}

	$scope.comenzar();

});