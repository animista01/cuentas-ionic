angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $ionicPopup, $timeout, $ionicLoading, Users, Pagos) {
	
  $ionicLoading.show({template: '<i class="icon ion-looping"></i>'});
  $timeout(function() {
		allUsers = Users.all();
		allUsers.then(function (res) {
			$scope.users = res;
	    $ionicLoading.hide();
		}, function (err) {
			$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2200, showBackdrop: false});
		});
  }, 500);
  //New User
	$scope.openPop = function () {
	 	$scope.user = {};
		$ionicPopup.show({
      title: 'Nuevo usuario',
      template: '<input type="text" placeholder="Nombre" ng-model="user.name" autofocus>',
      scope: $scope,
      buttons: [
	      { text: 'Cancelar' },
	      {
	        text: '<b>Crear</b>',
	        type: 'button-positive',
	        onTap: function(e) {
	          if (!$scope.user.name) {
	            //don't allow the user to close unless he enters wifi password
	            e.preventDefault();
	          }else {
	            return $scope.user.name;
	          }
	        }
	      },
	    ]
	  }).then(function (res) {
      if(res){
    		saveUser = Users.save(res);
    		saveUser.then(function (data) {
        	$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i><p>Usuario creado</p>', showBackdrop: false, duration: 1800});
        	console.log(data)
    			$scope.users = data;
    		}, function (err) {
        	$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2200, showBackdrop: false});
    		});
      }//End if res
    });
	}
})

.controller('DashUserCtrl', function ($ionicPopup, $scope, $state, $ionicModal, $stateParams, $ionicLoading, Users, Pagos) {
	aUser = Users.get($stateParams.userId);
	aUser.then(function (result) {
		$scope.user = result;
	});

  userPagos = Pagos.all($stateParams.userId);
  userPagos.then(function (res) {
		$scope.pagos = res;
  });

  $scope.editUser = function (userId) {
  	$ionicPopup.show({
	    template: '<input type="text" value="'+$scope.user.name+'" ng-model="user.name" autofocus />',
	    title: 'Editar Nombre',
	    scope: $scope,
	    buttons: [
	      { text: 'Cancelar' },
	      {
	        text: '<b>Actualizar</b>',
	        type: 'button-positive',
	        onTap: function(e) {
	          if (!$scope.user.name) {
	            //don't allow the user to close unless he enters wifi password
	            e.preventDefault();
	          }else {
	            return $scope.user.name;
	          }
	        }
	      },
	    ]
	  }).then(function(res) {
	    if (res) {
		  	updateUser = Users.update(res, userId);
		  	updateUser.then(function (res) {
					$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i>', duration: 2000, showBackdrop: false});
		  	}, function (err) {
					$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
		  	});
	    }
	  });
  }

  $scope.deleteUser = function (userId) {
  	$ionicPopup.confirm({
    	title: 'Eliminar este usuario?',
      template: 'Estas seguro?',
      cancelText: 'Cancelar',
      okText: 'Si'
   	}).then(function(res) {
     	if(res) {
		  	deleteUser = Users.delete(userId);
		  	deleteUser.then(function (res) {
		  		$state.go('dash');
        	$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i><p>Usuario eliminado</p>', showBackdrop: false, duration: 2000});
		  	}, function (err){
					$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2200, showBackdrop: false});
		  	});
     	}
   	});
  }

	$ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.gridModal = modal;
  });
  // open video modal
  $scope.openModal = function (data) {
    $scope.modalData = data;
    $scope.gridModal.show();
  };
  // close video modal
  $scope.closeModal = function() {
    $scope.gridModal.hide();
  };
  //Cleanup the video modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.gridModal.remove();
  });
  $scope.newPago = function (inputs) {
  	newPago = Pagos.save(inputs, $scope.user.id);
  	newPago.then(function (data) {
			$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i>', duration: 2500, showBackdrop: false});
    	$scope.pagos = data;
    	inputs.abono = "";
      inputs.fHasta = "";
      inputs.comentario = "";
      inputs.fPago = "";
      inputs.intereses = "";
      inputs.saldo = "";
  		$scope.gridModal.hide();
  	}, function (err) {
			$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2500, showBackdrop: false});
  	});
  }

  $scope.onePago = {};
  $ionicModal.fromTemplateUrl('modal-two.html', {
    scope: $scope
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.onTap = function (pagoId) {
  	$ionicLoading.show({template: '<i class="icon ion-looping"></i>'});
  	$scope.modal.show();
  	getOnePago = Pagos.get(pagoId);
  	getOnePago.then(function (result) {
  		console.log(result)
  		$scope.onePago = result;
  		$ionicLoading.hide();
  	}, function (err){
			$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2500, showBackdrop: false});
  	});
  }
	$scope.cerrar = function() {
    $scope.modal.hide();
  };
  //Cleanup the video modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  $scope.updatePago = function (inputs) {
  	console.log(inputs, $scope.user.id);
  	updtPago = Pagos.update(inputs, $scope.user.id);
  	updtPago.then(function (result) {
  		console.log(result);
			$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i>', duration: 2500, showBackdrop: false});
  		$scope.pagos = result;
  		$scope.modal.hide();
  	}, function (err){
			$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2500, showBackdrop: false});
  	});
  }

  $scope.onHold = function (pagoId) {
  	$ionicPopup.confirm({
    	title: 'Eliminar este pago?',
      template: 'Estas seguro?',
      cancelText: 'Cancelar',
      okText: 'Si'
   	}).then(function(res) {
     	if(res) {
		  	deletePago = Pagos.delete(pagoId, $scope.user.id);
		  	deletePago.then(function (res) {
		  		$scope.pagos = res;
        	$ionicLoading.show({template: '<i class="icon ion-checkmark-round"></i><p>Pago eliminado</p>', showBackdrop: false, duration: 2000});
		  	}, function (err){
					$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2000, showBackdrop: false});
		  	});
     	}
   	});
  }
});