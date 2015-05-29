angular.module('starter.services', [])

.factory('DB', function () {
  return{
    fetchAll: function(result) {
      var output = [];

      for (var i = 0; i < result.rows.length; i++) {
        output.push(result.rows.item(i));
      }
      return output;
    },
    fetch: function(result) {
      return result.rows.item(0);
    }
  }
})

.factory('Users', function ($cordovaSQLite, $q, DB) {
  var db = $cordovaSQLite.openDB("cuentas.db");
  return {
    save: function(name) {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'INSERT INTO users (name) VALUES (?)', [name]).then(function (result) {
        $cordovaSQLite.execute(db, 'SELECT * FROM users', []).then(function (res) {
          defer.resolve( DB.fetchAll(res) );
        }, function (err) {
        });
      }, function (err) {
        console.log(err);
        defer.reject(err);   
      });
      return defer.promise;
    },
    get: function (userId) {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'SELECT * FROM users WHERE id = ?', [userId]).then(function (result) {
        defer.resolve( DB.fetch(result) );
      }, function (err) {
        console.log(err);
        defer.reject(err);   
      });
      return defer.promise;
    },
    all: function () {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'SELECT * FROM users', []).then(function (result) {
        defer.resolve( DB.fetchAll(result) );
      }, function (err) {
        console.log(err);
        defer.reject(err);   
      });
      return defer.promise;
    },
    delete: function (userId) {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'DELETE FROM users WHERE id = ?', [parseInt(userId)]).then(
        function (result) {
          $cordovaSQLite.execute(db, 'DELETE FROM pagos WHERE user_id = ?', [parseInt(userId)]).then(
            function (res) {
              $cordovaSQLite.execute(db, 'SELECT * FROM users', []).then(
                function (result) {
                  defer.resolve( DB.fetchAll(result) );
                },
                function (err) {
                  console.log(err);
                  defer.reject(err);   
                }
              );
            }, 
            function (err) {
              console.log(err);
            }
          );
        }, 
        function (err) {
          console.log(err);
          defer.reject(err);   
        }
      );
      return defer.promise;
    },
    update: function (name, userId) {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'UPDATE users SET name = ? WHERE id = ?', [name, parseInt(userId)]).then(
        function (result) {
          defer.resolve( DB.fetchAll(result) );
        }, 
        function (err) {
          console.log(err);
          defer.reject(err);   
        }
      );
      return defer.promise;
    }
  } 
})

.factory('Pagos', function ($q, $cordovaSQLite, DB) {
  var db = $cordovaSQLite.openDB("cuentas.db");

  return{
    save: function (inputs, userId) {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'INSERT INTO pagos (abono, comentario, fecha_hasta, fecha_pago, intereses, saldo, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [parseInt(inputs.abono), inputs.comentario, inputs.fHasta, inputs.fPago, parseInt(inputs.intereses), parseInt(inputs.saldo), parseInt(userId)]).then(
      function (result) {
        $cordovaSQLite.execute(db, 'SELECT * FROM pagos WHERE user_id = ?', [userId]).then(
          function (res) {
            defer.resolve( DB.fetchAll(res) );
          }, 
          function (err) {
            console.log(err);
          }
        );
      }, function (err) {
        console.log(err);
        defer.reject(err);   
      });
      return defer.promise;
    },
    all: function (userId) {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'SELECT * FROM pagos WHERE user_id = ?', [userId]).then(function (result) {
        defer.resolve( DB.fetchAll(result) );
      }, function (err) {
        console.log(err);
        defer.reject(err);   
      });
      return defer.promise;
    },
    get: function (pagoId) {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'SELECT * FROM pagos WHERE id = ?', [parseInt(pagoId)]).then(function (result) {
        defer.resolve( DB.fetch(result) );
      }, function (err) {
        console.log(err);
        defer.reject(err);   
      });
      return defer.promise;
    },
    delete: function (pagoId, userId) {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'DELETE FROM pagos WHERE id = ?', [parseInt(pagoId)]).then(function (result) {
        $cordovaSQLite.execute(db, 'SELECT * FROM pagos WHERE user_id = ?', [parseInt(userId)]).then(
          function (res) {
            defer.resolve( DB.fetchAll(res) );
          }, 
          function (err) {
            console.log(err);
          }
        );
      }, function (err) {
        console.log(err);
        defer.reject(err);   
      });
      return defer.promise;
    },
    update: function (inputs, userId) {
      var defer = $q.defer();
      $cordovaSQLite.execute(db, 'UPDATE pagos SET abono = ?, comentario = ?, fecha_hasta = ?, fecha_pago = ?, intereses = ?, saldo = ? WHERE id = ?', [parseInt(inputs.abono), inputs.comentario, inputs.fecha_hasta, inputs.fecha_pago, parseInt(inputs.intereses), parseInt(inputs.saldo), parseInt(inputs.id)]).then(
        function (result) {
          $cordovaSQLite.execute(db, 'SELECT * FROM pagos WHERE user_id = ?', [parseInt(userId)]).then(
            function (res) {
              defer.resolve( DB.fetchAll(res) );
            }, 
            function (err) {
              console.log(err);
            }
          );
        }, 
        function (err) {
          console.log(err);
          defer.reject(err);   
        }
      );
      return defer.promise;
    }
  }
});
