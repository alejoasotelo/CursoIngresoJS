var miAplicacion = angular.module('AdivinaElNumero1', []);

miAplicacion.controller('controladorADB1', function($scope) {

	$scope.juego = {};

	$scope.comenzar = function(){

		$scope.juego.resp_ingresada = 0;
		$scope.juego.resp_correcta = Math.floor(Math.random()*100);
		$scope.juego.intentos = 0;

	}

	$scope.verificar = function(){

		if ($scope.juego.resp_ingresada == $scope.juego.resp_correcta)
		{
			alert("Usted es un ganador con " + $scope.juego.intentos);
			$scope.comenzar();
		}
		else
		{
			if ($scope.juego.resp_ingresada > $scope.juego.resp_correcta)
				alert('Te pasaste...');
			else
				alert('Te falto...')

			$scope.juego.intentos++;

		}
	};

	$scope.comenzar();

});