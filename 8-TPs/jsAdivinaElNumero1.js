var miAplicacion = angular.module('AdivinaElNumero1', []);

miAplicacion.controller('controladorADB1', function($scope) {

	$scope.juego = {};

	$scope.comenzar = function(){

		$scope.resetearRespuestaIngresada();
		$scope.juego.resp_correcta = Math.floor(Math.random()*100);
		$scope.juego.intentos = null;

	}

	$scope.verificar = function(){

		if ($scope.juego.resp_ingresada == $scope.juego.resp_correcta)
		{
			alert("¡Usted es un ganador con " + $scope.juego.intentos + " intentos!");
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

	$scope.resetearRespuestaIngresada = function(){

		$scope.juego.resp_ingresada = null;

	}

	$scope.comenzar();

});