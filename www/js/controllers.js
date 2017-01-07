angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $ionicPopup, $timeout, $ionicLoading, Users, Pagos){
  $ionicLoading.show({template: '<i class="icon ion-looping"></i>'});
  
  $scope.esto = [{"id":9,"name":"Contreras 300.000 19-8"},{"id":16,"name":"Gambin 2.500.000 10-10-14"},{"id":18,"name":"Giselle 300.000 15-2"},{"id":20,"name":"Fabio 150.000 1-9"},{"id":21,"name":"Yadira 200.000 1-4"},{"id":23,"name":"Iván 1.000.000 1-7"},{"id":26,"name":"Rosana 2.000.000+100 25-5"},{"id":37,"name":"Edith2  $500000 15-10-14"},{"id":39,"name":"Medardo 500000 16-8-15"},{"id":49,"name":"Pollo Marilyn 2.000.000 6-3-15 8%"},{"id":50,"name":"Mile $600.000 6-3-15"},{"id":54,"name":"Molina $2000000 31-8-15"},{"id":64,"name":"Pollo Dario 2050000 15-10-15 8%"},{"id":66,"name":"Pollo Henry 500.000 10-11-15 10%"},{"id":71,"name":"John 1500000 1-3-16  12%"},{"id":75,"name":"Galvis 300000 20-5-16"},{"id":77,"name":"Chimas 100000 27-5-16"},{"id":78,"name":"Muñoz 3000000 2-6-16"},{"id":79,"name":"Pibe2 1000000 15 mayo"},{"id":80,"name":"Pibe 1000000 15 03 16"},{"id":82,"name":"Jainer primo 300000 2-7-16"},{"id":84,"name":"Jainer 650000 25-7-16"},{"id":88,"name":"Dary 350000 31-7-16"},{"id":89,"name":"Rrd 5000000 1-8-16 12%"},{"id":90,"name":"Desiderio 100000 14-9-16"},{"id":91,"name":"Ruizdiaz 600000 20-9-16"},{"id":92,"name":"Liceth 7000000 8-10-16 10%"},{"id":93,"name":"Arias 2284000 15-10-16 12%"},{"id":94,"name":"Julio Hdez 100000 26-10-16 10%"},{"id":98,"name":"Gallito 600000 2-11-16"},{"id":99,"name":"Luis Mogollon 300000 23-11-16"},{"id":100,"name":"Juan Pipe 10.000.000 20-8-16"},{"id":101,"name":"Mogollón 300000 23 Nov 16"},{"id":102,"name":"Vladimir 4700000 13-12-16"},{"id":103,"name":"Rubí 300000 25-12-16"}]
  $scope.aquello = [{"id":1,"abono":0,"comentario":"Ok","fecha_hasta":"2014-07-25","fecha_pago":"2014-09-10","intereses":500000,"saldo":2000000,"user_id":26},{"id":9,"abono":0,"comentario":"Debe 20000","fecha_hasta":"2014-04-15","fecha_pago":"2014-09-19","intereses":70000,"saldo":300000,"user_id":18},{"id":10,"abono":0,"comentario":"Ok","fecha_hasta":"2014-09-01","fecha_pago":"2014-09-19","intereses":300000,"saldo":1000000,"user_id":23},{"id":12,"abono":0,"comentario":"Ok","fecha_hasta":"2014-09-19","fecha_pago":"2014-09-21","intereses":45000,"saldo":300000,"user_id":9},{"id":19,"abono":0,"comentario":"Ok","fecha_hasta":"2014-05-01","fecha_pago":"2014-10-08","intereses":45000,"saldo":300000,"user_id":18},{"id":23,"abono":0,"comentario":"Ok se deja al 12%","fecha_hasta":"2014-10-01","fecha_pago":"2014-10-16","intereses":120000,"saldo":1000000,"user_id":23},{"id":24,"abono":0,"comentario":"Pdte 50000","fecha_hasta":"2014-08-25","fecha_pago":"2014-10-16","intereses":150000,"saldo":2000000,"user_id":26},{"id":29,"abono":0,"comentario":"Ok","fecha_hasta":"2014-09-01","fecha_pago":"2014-10-21","intereses":400000,"saldo":2000000,"user_id":2},{"id":30,"abono":0,"comentario":"Ok","fecha_hasta":"2014-10-19","fecha_pago":"2014-10-23","intereses":45000,"saldo":300000,"user_id":9},{"id":34,"abono":0,"comentario":"Ok","fecha_hasta":"2014-11-01","fecha_pago":"2014-11-02","intereses":30000,"saldo":150000,"user_id":20},{"id":43,"abono":0,"comentario":"Ok","fecha_hasta":"2014-11-19","fecha_pago":"2014-11-21","intereses":45000,"saldo":300000,"user_id":9},{"id":50,"abono":0,"comentario":"Debe 50000 en 12-12-14 presto 500000","fecha_hasta":"2014-10-25","fecha_pago":"2014-12-03","intereses":400000,"saldo":2000000,"user_id":26},{"id":53,"abono":0,"comentario":"Ok","fecha_hasta":"2014-11-10","fecha_pago":"2014-12-06","intereses":250000,"saldo":2500000,"user_id":16},{"id":54,"abono":0,"comentario":"Ok","fecha_hasta":"2014-09-01","fecha_pago":"2014-12-08","intereses":150000,"saldo":200000,"user_id":21},{"id":56,"abono":0,"comentario":"Ok","fecha_hasta":"2014-11-01","fecha_pago":"2014-12-13","intereses":400000,"saldo":2000000,"user_id":2},{"id":58,"abono":100000,"comentario":"Ok","fecha_hasta":"2014-12-15","fecha_pago":"2014-12-15","intereses":150000,"saldo":400000,"user_id":37},{"id":68,"abono":0,"comentario":"Ok","fecha_hasta":"2014-12-19","fecha_pago":"2014-12-22","intereses":45000,"saldo":3000000,"user_id":9},{"id":69,"abono":0,"comentario":"Ok","fecha_hasta":"2015-01-19","fecha_pago":"2015-01-23","intereses":45000,"saldo":300000,"user_id":9},{"id":70,"abono":0,"comentario":"Debe 12000","fecha_hasta":"2014-06-15","fecha_pago":"2014-12-04","intereses":50000,"saldo":300000,"user_id":18},{"id":71,"abono":0,"comentario":"Debe 12000","fecha_hasta":"2014-07-15","fecha_pago":"2015-01-21","intereses":45000,"saldo":300000,"user_id":18},{"id":72,"abono":0,"comentario":"Ok","fecha_hasta":"2015-02-01","fecha_pago":"2015-01-29","intereses":50000,"saldo":150000,"user_id":20},{"id":74,"abono":0,"comentario":"Ok","fecha_hasta":"2014-12-01","fecha_pago":"2015-02-02","intereses":200000,"saldo":2000000,"user_id":2},{"id":75,"abono":0,"comentario":"Debe 100000","fecha_hasta":"2015-01-10","fecha_pago":"2015-02-02","intereses":400000,"saldo":2500000,"user_id":16},{"id":77,"abono":100000,"comentario":"Ok","fecha_hasta":"2015-02-06","fecha_pago":"2015-02-06","intereses":20000,"saldo":100000,"user_id":39},{"id":80,"abono":0,"comentario":"Ok","fecha_hasta":"2014-08-15","fecha_pago":"2015-02-10","intereses":40000,"saldo":300000,"user_id":18},{"id":91,"abono":0,"comentario":"Ok","fecha_hasta":"2015-02-15","fecha_pago":"2015-03-05","intereses":120000,"saldo":400000,"user_id":37},{"id":92,"abono":15000,"comentario":"Ok","fecha_hasta":"2015-03-06","fecha_pago":"2015-03-02","intereses":15000,"saldo":85000,"user_id":39},{"id":95,"abono":112000,"comentario":"Ok","fecha_hasta":"2015-03-14","fecha_pago":"2015-03-14","intereses":38000,"saldo":388000,"user_id":47},{"id":98,"abono":0,"comentario":"Ok","fecha_hasta":"2015-01-01","fecha_pago":"2015-03-19","intereses":200000,"saldo":2000000,"user_id":2},{"id":100,"abono":0,"comentario":"Ok","fecha_hasta":"2015-03-19","fecha_pago":"2015-03-22","intereses":45000,"saldo":300000,"user_id":9},{"id":103,"abono":150000,"comentario":"Ok","fecha_hasta":"2015-04-01","fecha_pago":"2015-03-30","intereses":70000,"saldo":450000,"user_id":51},{"id":106,"abono":0,"comentario":"Debe 20000","fecha_hasta":"2014-10-15","fecha_pago":"2015-04-08","intereses":70000,"saldo":300000,"user_id":18},{"id":108,"abono":0,"comentario":"Ok","fecha_hasta":"2015-04-06","fecha_pago":"2015-04-07","intereses":160000,"saldo":2000000,"user_id":49},{"id":112,"abono":0,"comentario":"Ok","fecha_hasta":"2015-04-19","fecha_pago":"2015-04-20","intereses":45000,"saldo":300000,"user_id":9},{"id":117,"abono":100000,"comentario":"Debo 2000","fecha_hasta":"2015-05-01","fecha_pago":"2015-05-02","intereses":70000,"saldo":500000,"user_id":51},{"id":119,"abono":0,"comentario":"Ok","fecha_hasta":"2014-11-15","fecha_pago":"2015-05-05","intereses":40000,"saldo":300000,"user_id":18},{"id":120,"abono":0,"comentario":"Ok","fecha_hasta":"2015-05-05","fecha_pago":"2015-05-06","intereses":30000,"saldo":100000,"user_id":39},{"id":121,"abono":50000,"comentario":"Ok","fecha_hasta":"2015-09-15","fecha_pago":"2015-09-15","intereses":120000,"saldo":1950000,"user_id":54},{"id":125,"abono":500000,"comentario":"Prestó 500000 el 15-10-15","fecha_hasta":"2015-05-03","fecha_pago":"2015-05-12","intereses":160000,"saldo":2500000,"user_id":49},{"id":127,"abono":0,"comentario":"Debe 400","fecha_hasta":"2015-03-10","fecha_pago":"2015-04-03","intereses":200000,"saldo":2500000,"user_id":16},{"id":128,"abono":0,"comentario":"Debe 200000","fecha_hasta":"2015-03-10","fecha_pago":"2015-05-15","intereses":200000,"saldo":2500000,"user_id":16},{"id":132,"abono":0,"comentario":"Ok","fecha_hasta":"2015-09-15","fecha_pago":"2015-09-15","intereses":20000,"saldo":400000,"user_id":59},{"id":134,"abono":0,"comentario":"Ok","fecha_hasta":"2015-09-15","fecha_pago":"2015-09-15","intereses":40000,"saldo":300000,"user_id":52},{"id":135,"abono":0,"comentario":"Ok","fecha_hasta":"2015-09-06","fecha_pago":"2015-09-16","intereses":160000,"saldo":2500000,"user_id":49},{"id":140,"abono":0,"comentario":"Ok","fecha_hasta":"2015-10-01","fecha_pago":"2015-09-17","intereses":270000,"saldo":1500000,"user_id":61},{"id":142,"abono":0,"comentario":"Ok","fecha_hasta":"2015-09-05","fecha_pago":"2015-09-05","intereses":50000,"saldo":500000,"user_id":39},{"id":143,"abono":0,"comentario":"Ok","fecha_hasta":"2015-06-15","fecha_pago":"2015-08-02","intereses":60000,"saldo":388000,"user_id":47},{"id":144,"abono":50000,"comentario":"Ok","fecha_hasta":"2015-08-10","fecha_pago":"2015-08-10","intereses":66000,"saldo":390000,"user_id":56},{"id":148,"abono":0,"comentario":"Ok","fecha_hasta":"2015-09-19","fecha_pago":"2015-09-20","intereses":90000,"saldo":300000,"user_id":9},{"id":150,"abono":70000,"comentario":"Ok","fecha_hasta":"2015-08-18","fecha_pago":"2015-08-18","intereses":90000,"saldo":330000,"user_id":51},{"id":151,"abono":0,"comentario":"Debe 50000","fecha_hasta":"2015-04-10","fecha_pago":"2015-06-30","intereses":200000,"saldo":2500000,"user_id":16},{"id":152,"abono":0,"comentario":"5000 a favor","fecha_hasta":"2015-02-15","fecha_pago":"2015-08-18","intereses":60000,"saldo":300000,"user_id":18},{"id":154,"abono":0,"comentario":"Ok","fecha_hasta":"2015-06-01","fecha_pago":"2015-06-28","intereses":30000,"saldo":150000,"user_id":20},{"id":155,"abono":0,"comentario":"Ok","fecha_hasta":"2015-06-04","fecha_pago":"2015-07-07","intereses":90000,"saldo":200000,"user_id":21},{"id":158,"abono":0,"comentario":"Ok","fecha_hasta":"2015-10-01","fecha_pago":"2015-09-29","intereses":117000,"saldo":1950000,"user_id":54},{"id":160,"abono":0,"comentario":"Ok","fecha_hasta":"2015-10-01","fecha_pago":"2015-10-01","intereses":60000,"saldo":390000,"user_id":56},{"id":162,"abono":0,"comentario":"Ok","fecha_hasta":"2015-04-06","fecha_pago":"2015-10-09","intereses":60000,"saldo":600000,"user_id":50},{"id":163,"abono":0,"comentario":"Ok","fecha_hasta":"2015-10-05","fecha_pago":"2015-10-10","intereses":75000,"saldo":500000,"user_id":39},{"id":164,"abono":50000,"comentario":"Ok","fecha_hasta":"2015-10-15","fecha_pago":"2015-10-15","intereses":117000,"saldo":1900000,"user_id":54},{"id":165,"abono":0,"comentario":"Presto 50. 000","fecha_hasta":"2015-10-15","fecha_pago":"2015-10-15","intereses":90000,"saldo":1550000,"user_id":61},{"id":167,"abono":130000,"comentario":"Ok","fecha_hasta":"2015-10-18","fecha_pago":"2015-10-21","intereses":100000,"saldo":200000,"user_id":51},{"id":168,"abono":0,"comentario":"Ok","fecha_hasta":"2015-08-01","fecha_pago":"2015-10-15","intereses":30000,"saldo":150000,"user_id":20},{"id":169,"abono":0,"comentario":"Presto 500.000 el 20-10-15","fecha_hasta":"2015-10-06","fecha_pago":"2015-10-18","intereses":160000,"saldo":2500000,"user_id":49},{"id":170,"abono":50000,"comentario":"Ok","fecha_hasta":"2015-10-15","fecha_pago":"2015-10-15","intereses":0,"saldo":350000,"user_id":59},{"id":172,"abono":0,"comentario":"Ok","fecha_hasta":"2015-03-15","fecha_pago":"2015-09-19","intereses":40000,"saldo":300000,"user_id":18},{"id":173,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-01","fecha_pago":"2015-10-29","intereses":115000,"saldo":1900000,"user_id":54},{"id":174,"abono":0,"comentario":"Ok","fecha_hasta":"2015-02-01","fecha_pago":"2015-10-29","intereses":200000,"saldo":2000000,"user_id":2},{"id":175,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-01","fecha_pago":"2015-10-30","intereses":93000,"saldo":1550000,"user_id":61},{"id":176,"abono":0,"comentario":"Debe 10000","fecha_hasta":"2015-04-15","fecha_pago":"2015-10-29","intereses":30000,"saldo":300000,"user_id":18},{"id":177,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-01","fecha_pago":"2015-10-31","intereses":58500,"saldo":390000,"user_id":56},{"id":178,"abono":0,"comentario":"Debe 5000","fecha_hasta":"2015-05-15","fecha_pago":"2015-11-01","intereses":25000,"saldo":300000,"user_id":18},{"id":179,"abono":0,"comentario":"A favor 50000","fecha_hasta":"2015-04-10","fecha_pago":"2015-11-01","intereses":100000,"saldo":2500000,"user_id":16},{"id":180,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-05","fecha_pago":"2015-11-06","intereses":75000,"saldo":500000,"user_id":39},{"id":182,"abono":0,"comentario":"Ok","fecha_hasta":"2015-05-06","fecha_pago":"2015-11-08","intereses":60000,"saldo":600000,"user_id":50},{"id":183,"abono":0,"comentario":"Presto 150000","fecha_hasta":"2015-11-04","fecha_pago":"2015-11-04","intereses":150000,"saldo":540000,"user_id":56},{"id":184,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-15","fecha_pago":"2015-11-13","intereses":114000,"saldo":1900000,"user_id":54},{"id":186,"abono":0,"comentario":"Ik","fecha_hasta":"2015-03-01","fecha_pago":"2015-11-14","intereses":200000,"saldo":2000000,"user_id":2},{"id":187,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-15","fecha_pago":"2015-11-17","intereses":93000,"saldo":1550000,"user_id":61},{"id":188,"abono":500,"comentario":"Ok","fecha_hasta":"2015-11-15","fecha_pago":"2015-11-17","intereses":0,"saldo":1000,"user_id":65},{"id":189,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-15","fecha_pago":"2015-11-17","intereses":80000,"saldo":300000,"user_id":52},{"id":190,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-19","fecha_pago":"2015-11-20","intereses":90000,"saldo":300000,"user_id":9},{"id":191,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-06","fecha_pago":"2015-11-19","intereses":210000,"saldo":2500000,"user_id":49},{"id":193,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-30","fecha_pago":"2015-11-27","intereses":114000,"saldo":2000000,"user_id":54},{"id":196,"abono":50000,"comentario":"Ok","fecha_hasta":"2015-11-30","fecha_pago":"2015-11-28","intereses":0,"saldo":300000,"user_id":59},{"id":197,"abono":0,"comentario":"Ok","fecha_hasta":"2015-06-02","fecha_pago":"2015-12-02","intereses":60000,"saldo":600000,"user_id":50},{"id":199,"abono":0,"comentario":"Ok","fecha_hasta":"2015-12-01","fecha_pago":"2015-12-02","intereses":81000,"saldo":540000,"user_id":56},{"id":201,"abono":0,"comentario":"Ok","fecha_hasta":"2015-12-05","fecha_pago":"2015-12-06","intereses":75000,"saldo":500000,"user_id":39},{"id":203,"abono":0,"comentario":"Ok","fecha_hasta":"2015-12-15","fecha_pago":"2015-12-15","intereses":114000,"saldo":1900000,"user_id":54},{"id":204,"abono":0,"comentario":"Ok","fecha_hasta":"2015-04-01","fecha_pago":"2015-12-05","intereses":200000,"saldo":2000000,"user_id":2},{"id":205,"abono":0,"comentario":"Ok","fecha_hasta":"2015-12-01","fecha_pago":"2015-11-30","intereses":93000,"saldo":1550000,"user_id":61},{"id":206,"abono":50000,"comentario":"Ok","fecha_hasta":"2015-12-15","fecha_pago":"2015-12-17","intereses":0,"saldo":250000,"user_id":59},{"id":208,"abono":0,"comentario":"Ok","fecha_hasta":"2015-05-01","fecha_pago":"2015-12-18","intereses":200000,"saldo":2000000,"user_id":2},{"id":210,"abono":0,"comentario":"Ok","fecha_hasta":"2015-12-15","fecha_pago":"2015-12-19","intereses":93000,"saldo":1550000,"user_id":61},{"id":212,"abono":0,"comentario":"Ok","fecha_hasta":"2015-12-15","fecha_pago":"2015-12-23","intereses":210000,"saldo":2500000,"user_id":49},{"id":213,"abono":89000,"comentario":"Ok","fecha_hasta":"2015-12-29","fecha_pago":"2015-12-29","intereses":81000,"saldo":451000,"user_id":56},{"id":214,"abono":400000,"comentario":"Prestó 400000","fecha_hasta":"2015-12-29","fecha_pago":"2015-12-29","intereses":0,"saldo":851000,"user_id":56},{"id":216,"abono":50000,"comentario":"Ok","fecha_hasta":"2015-12-06","fecha_pago":"2015-12-28","intereses":0,"saldo":450000,"user_id":39},{"id":217,"abono":0,"comentario":"Ok","fecha_hasta":"2016-01-01","fecha_pago":"2015-12-29","intereses":114000,"saldo":1900000,"user_id":54},{"id":218,"abono":0,"comentario":"Debe 4000","fecha_hasta":"2015-11-15","fecha_pago":"2015-12-23","intereses":160000,"saldo":2050000,"user_id":64},{"id":219,"abono":0,"comentario":"Ok","fecha_hasta":"2016-01-01","fecha_pago":"2015-12-30","intereses":93000,"saldo":1550000,"user_id":61},{"id":220,"abono":50000,"comentario":"Ok","fecha_hasta":"2015-12-31","fecha_pago":"2015-12-31","intereses":0,"saldo":200000,"user_id":59},{"id":221,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-01-01","fecha_pago":"2016-01-01","intereses":40000,"saldo":250000,"user_id":68},{"id":222,"abono":0,"comentario":"Ok","fecha_hasta":"2016-01-06","fecha_pago":"2016-01-07","intereses":75000,"saldo":450000,"user_id":39},{"id":224,"abono":1250000,"comentario":"Presto 1.250.000 debe 320 int","fecha_hasta":"2016-01-12","fecha_pago":"2016-01-10","intereses":0,"saldo":3300000,"user_id":64},{"id":225,"abono":0,"comentario":"Ok","fecha_hasta":"2015-07-15","fecha_pago":"2016-01-12","intereses":80000,"saldo":300000,"user_id":18},{"id":226,"abono":0,"comentario":"Ok","fecha_hasta":"2016-01-15","fecha_pago":"2016-01-14","intereses":93000,"saldo":1550000,"user_id":61},{"id":229,"abono":150000,"comentario":"Congeló con 600000","fecha_hasta":"2016-01-18","fecha_pago":"2016-01-18","intereses":0,"saldo":450000,"user_id":47},{"id":230,"abono":0,"comentario":"Ok","fecha_hasta":"2015-11-15","fecha_pago":"2016-01-18","intereses":50000,"saldo":150000,"user_id":20},{"id":231,"abono":1800000,"comentario":"Debe intereses de 8 meses","fecha_hasta":"2015-05-01","fecha_pago":"2016-01-21","intereses":0,"saldo":200000,"user_id":2},{"id":232,"abono":500,"comentario":"Ok","fecha_hasta":"2016-01-10","fecha_pago":"2016-01-10","intereses":0,"saldo":500,"user_id":65},{"id":233,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-01-21","fecha_pago":"2016-01-21","intereses":0,"saldo":4400000,"user_id":16},{"id":234,"abono":0,"comentario":"Ok","fecha_hasta":"2015-07-02","fecha_pago":"2016-01-21","intereses":60000,"saldo":600000,"user_id":50},{"id":236,"abono":0,"comentario":"Debe160 y de ahí 3300000 a partir del 12 enero 2016","fecha_hasta":"2015-12-15","fecha_pago":"2016-01-27","intereses":160000,"saldo":3300000,"user_id":64},{"id":237,"abono":86000,"comentario":"Oj","fecha_hasta":"2016-02-01","fecha_pago":"2016-01-28","intereses":114000,"saldo":1814000,"user_id":54},{"id":238,"abono":0,"comentario":"Ok","fecha_hasta":"2016-02-01","fecha_pago":"2016-01-28","intereses":92000,"saldo":1550000,"user_id":61},{"id":239,"abono":0,"comentario":"Ok","fecha_hasta":"2016-01-15","fecha_pago":"2016-01-30","intereses":90000,"saldo":300000,"user_id":52},{"id":242,"abono":100000,"comentario":"Ok","fecha_hasta":"2015-12-19","fecha_pago":"2016-01-07","intereses":45000,"saldo":200000,"user_id":9},{"id":243,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-02-06","fecha_pago":"2016-02-06","intereses":67000,"saldo":400000,"user_id":39},{"id":244,"abono":0,"comentario":"5 a favor","fecha_hasta":"2016-02-15","fecha_pago":"2016-02-13","intereses":45000,"saldo":150000,"user_id":20},{"id":246,"abono":159000,"comentario":"Ok","fecha_hasta":"2016-02-15","fecha_pago":"2016-02-14","intereses":191000,"saldo":692000,"user_id":56},{"id":247,"abono":0,"comentario":"Ok","fecha_hasta":"2016-02-15","fecha_pago":"2016-02-15","intereses":93000,"saldo":1550000,"user_id":61},{"id":248,"abono":71000,"comentario":"Ok","fecha_hasta":"2016-02-15","fecha_pago":"2016-02-13","intereses":109000,"saldo":1743000,"user_id":54},{"id":249,"abono":100,"comentario":"Ok","fecha_hasta":"2016-02-15","fecha_pago":"2016-02-17","intereses":0,"saldo":4300000,"user_id":16},{"id":251,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-02-15","fecha_pago":"2016-02-15","intereses":0,"saldo":150000,"user_id":59},{"id":252,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-02-15","fecha_pago":"2016-02-18","intereses":0,"saldo":350000,"user_id":47},{"id":253,"abono":450000,"comentario":"Presto 450000","fecha_hasta":"2016-02-19","fecha_pago":"2016-02-19","intereses":0,"saldo":2000000,"user_id":61},{"id":255,"abono":0,"comentario":"Ok","fecha_hasta":"2016-03-01","fecha_pago":"2016-02-26","intereses":113000,"saldo":2000000,"user_id":61},{"id":256,"abono":46000,"comentario":"Ok","fecha_hasta":"2016-03-01","fecha_pago":"2016-02-26","intereses":104000,"saldo":1697000,"user_id":54},{"id":259,"abono":50000,"comentario":"100 bici y 120 celu","fecha_hasta":"2016-02-28","fecha_pago":"2016-02-28","intereses":0,"saldo":320000,"user_id":59},{"id":260,"abono":0,"comentario":"Ok","fecha_hasta":"2016-01-19","fecha_pago":"2016-02-27","intereses":30000,"saldo":200000,"user_id":9},{"id":261,"abono":0,"comentario":"Ok","fecha_hasta":"2016-02-15","fecha_pago":"2016-03-03","intereses":43000,"saldo":300000,"user_id":52},{"id":262,"abono":0,"comentario":"Ok","fecha_hasta":"2015-07-01","fecha_pago":"2016-03-02","intereses":45000,"saldo":300000,"user_id":18},{"id":265,"abono":0,"comentario":"Ok","fecha_hasta":"2015-08-02","fecha_pago":"2016-03-05","intereses":60000,"saldo":600000,"user_id":50},{"id":266,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-03-02","fecha_pago":"2016-03-09","intereses":50000,"saldo":200000,"user_id":68},{"id":267,"abono":0,"comentario":"Ok","fecha_hasta":"2016-03-10","fecha_pago":"2016-03-09","intereses":200000,"saldo":500000,"user_id":66},{"id":269,"abono":0,"comentario":"Le debo 8000","fecha_hasta":"2016-03-15","fecha_pago":"2016-03-15","intereses":110000,"saldo":1697000,"user_id":54},{"id":270,"abono":30000,"comentario":"Ok","fecha_hasta":"2016-03-15","fecha_pago":"2016-03-15","intereses":0,"saldo":290000,"user_id":59},{"id":274,"abono":0,"comentario":"Ok","fecha_hasta":"2016-03-06","fecha_pago":"2016-03-10","intereses":60000,"saldo":400000,"user_id":39},{"id":275,"abono":70000,"comentario":"Ok","fecha_hasta":"2016-03-23","fecha_pago":"2016-03-23","intereses":0,"saldo":280000,"user_id":47},{"id":276,"abono":0,"comentario":"Ok","fecha_hasta":"2016-02-19","fecha_pago":"2016-03-28","intereses":30000,"saldo":200000,"user_id":9},{"id":277,"abono":0,"comentario":"Ok","fecha_hasta":"2016-03-15","fecha_pago":"2016-03-30","intereses":120000,"saldo":2000000,"user_id":61},{"id":278,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-03-29","fecha_pago":"2016-03-29","intereses":180000,"saldo":1900000,"user_id":71},{"id":279,"abono":0,"comentario":"Ok","fecha_hasta":"2016-03-30","fecha_pago":"2016-03-30","intereses":100000,"saldo":1697000,"user_id":54},{"id":281,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-03-01","fecha_pago":"2016-03-02","intereses":0,"saldo":1700000,"user_id":2},{"id":282,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-03-30","fecha_pago":"2016-03-30","intereses":0,"saldo":1600000,"user_id":2},{"id":283,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-04-01","fecha_pago":"2016-03-31","intereses":0,"saldo":240000,"user_id":59},{"id":284,"abono":0,"comentario":"Ok","fecha_hasta":"2015-08-02","fecha_pago":"2016-04-03","intereses":60000,"saldo":600000,"user_id":50},{"id":285,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-04-07","fecha_pago":"2016-04-07","intereses":20000,"saldo":150000,"user_id":68},{"id":287,"abono":0,"comentario":"Paga 160 viejos más 380 queda saldo a favor de 116","fecha_hasta":"2016-02-12","fecha_pago":"2016-04-07","intereses":540000,"saldo":3300000,"user_id":64},{"id":288,"abono":0,"comentario":"Ok","fecha_hasta":"2016-04-10","fecha_pago":"2016-04-11","intereses":60000,"saldo":400000,"user_id":39},{"id":289,"abono":0,"comentario":"Ok","fecha_hasta":"2016-04-15","fecha_pago":"2016-04-15","intereses":240000,"saldo":2000000,"user_id":61},{"id":290,"abono":0,"comentario":"Ok","fecha_hasta":"2015-04-30","fecha_pago":"2016-04-17","intereses":100000,"saldo":400000,"user_id":37},{"id":293,"abono":0,"comentario":"Ok","fecha_hasta":"2016-04-15","fecha_pago":"2016-04-29","intereses":100000,"saldo":1697000,"user_id":54},{"id":294,"abono":0,"comentario":"Ok","fecha_hasta":"2016-04-01","fecha_pago":"2016-03-31","intereses":65000,"saldo":300000,"user_id":52},{"id":295,"abono":0,"comentario":"Ok","fecha_hasta":"2016-05-01","fecha_pago":"2016-04-28","intereses":120000,"saldo":2000000,"user_id":61},{"id":297,"abono":0,"comentario":"Ok","fecha_hasta":"2016-04-27","fecha_pago":"2016-04-28","intereses":168000,"saldo":1400000,"user_id":71},{"id":298,"abono":0,"comentario":"Se hace cargo cuenta de la esposa quedando 1400000+792000=2190000","fecha_hasta":"2016-04-28","fecha_pago":"2016-04-28","intereses":0,"saldo":2190000,"user_id":71},{"id":300,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-05-01","fecha_pago":"2016-05-01","intereses":0,"saldo":190000,"user_id":59},{"id":301,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-05-10","fecha_pago":"2016-05-10","intereses":60000,"saldo":350000,"user_id":39},{"id":302,"abono":0,"comentario":"Ok","fecha_hasta":"2016-05-15","fecha_pago":"2016-05-12","intereses":120000,"saldo":2000000,"user_id":61},{"id":303,"abono":0,"comentario":"Pendiente 100 intereses","fecha_hasta":"2016-05-15","fecha_pago":"2016-05-12","intereses":100000,"saldo":1697000,"user_id":54},{"id":306,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-05-15","fecha_pago":"2016-05-15","intereses":0,"saldo":140000,"user_id":59},{"id":307,"abono":0,"comentario":"Ok","fecha_hasta":"2016-09-06","fecha_pago":"2016-05-20","intereses":60000,"saldo":600000,"user_id":50},{"id":308,"abono":0,"comentario":"Ok","fecha_hasta":"2016-05-28","fecha_pago":"2016-05-28","intereses":219000,"saldo":2190000,"user_id":71},{"id":309,"abono":0,"comentario":"Ok","fecha_hasta":"2016-05-30","fecha_pago":"2016-05-28","intereses":100000,"saldo":2000000,"user_id":61},{"id":310,"abono":0,"comentario":"Ok","fecha_hasta":"2016-05-31","fecha_pago":"2016-05-28","intereses":200000,"saldo":1697000,"user_id":54},{"id":312,"abono":0,"comentario":"Ok","fecha_hasta":"2016-02-21","fecha_pago":"2016-06-04","intereses":500000,"saldo":2500000,"user_id":49},{"id":313,"abono":0,"comentario":"Ok","fecha_hasta":"2015-09-01","fecha_pago":"2016-06-06","intereses":60000,"saldo":300000,"user_id":18},{"id":315,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-06-15","fecha_pago":"2016-06-15","intereses":140000,"saldo":1900000,"user_id":61},{"id":316,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-06-15","fecha_pago":"2016-06-15","intereses":120000,"saldo":2900000,"user_id":78},{"id":317,"abono":0,"comentario":"Ok","fecha_hasta":"2016-06-15","fecha_pago":"2016-06-16","intereses":100000,"saldo":1500000,"user_id":2},{"id":318,"abono":0,"comentario":"Ok","fecha_hasta":"2016-06-10","fecha_pago":"2016-06-16","intereses":150000,"saldo":500000,"user_id":66},{"id":319,"abono":0,"comentario":"Debe 10","fecha_hasta":"2016-06-15","fecha_pago":"2016-06-17","intereses":100000,"saldo":300000,"user_id":52},{"id":320,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-06-27","fecha_pago":"2016-06-27","intereses":40000,"saldo":50000,"user_id":68},{"id":321,"abono":0,"comentario":"Ok","fecha_hasta":"2016-06-28","fecha_pago":"2016-06-28","intereses":220000,"saldo":2190000,"user_id":71},{"id":322,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-06-10","fecha_pago":"2016-06-29","intereses":0,"saldo":300000,"user_id":39},{"id":325,"abono":0,"comentario":"Ok","fecha_hasta":"2016-07-01","fecha_pago":"2016-07-01","intereses":114000,"saldo":1900000,"user_id":61},{"id":326,"abono":0,"comentario":"Ok","fecha_hasta":"2016-06-19","fecha_pago":"2016-07-01","intereses":120000,"saldo":200000,"user_id":9},{"id":327,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-07-01","fecha_pago":"2016-06-30","intereses":116000,"saldo":2800000,"user_id":78},{"id":328,"abono":0,"comentario":"Ok","fecha_hasta":"2016-04-15","fecha_pago":"2016-03-30","intereses":100,"saldo":1000,"user_id":80},{"id":329,"abono":0,"comentario":"Ok","fecha_hasta":"2016-05-15","fecha_pago":"2016-04-30","intereses":100,"saldo":1000000,"user_id":80},{"id":330,"abono":0,"comentario":"Ok","fecha_hasta":"2016-06-15","fecha_pago":"2016-06-01","intereses":100,"saldo":1000000,"user_id":80},{"id":331,"abono":0,"comentario":"Ok","fecha_hasta":"2016-07-15","fecha_pago":"2016-06-30","intereses":100,"saldo":1000000,"user_id":80},{"id":332,"abono":0,"comentario":"Ok","fecha_hasta":"2016-06-15","fecha_pago":"2016-06-30","intereses":100,"saldo":1000000,"user_id":79},{"id":333,"abono":0,"comentario":"Ok","fecha_hasta":"2016-06-20","fecha_pago":"2016-07-03","intereses":45000,"saldo":300000,"user_id":75},{"id":335,"abono":0,"comentario":"Ok","fecha_hasta":"2016-07-01","fecha_pago":"2016-06-30","intereses":100,"saldo":1400000,"user_id":2},{"id":336,"abono":0,"comentario":"5000 a favor","fecha_hasta":"2016-07-10","fecha_pago":"2016-07-10","intereses":50000,"saldo":300000,"user_id":39},{"id":337,"abono":35000,"comentario":"Ok","fecha_hasta":"2016-07-12","fecha_pago":"2016-07-12","intereses":15000,"saldo":65000,"user_id":77},{"id":338,"abono":0,"comentario":"Ok","fecha_hasta":"2016-07-15","fecha_pago":"2016-07-14","intereses":114000,"saldo":1900000,"user_id":61},{"id":339,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-07-15","fecha_pago":"2016-07-15","intereses":112000,"saldo":2700000,"user_id":78},{"id":340,"abono":0,"comentario":"Ok","fecha_hasta":"2016-07-15","fecha_pago":"2016-07-10","intereses":50000,"saldo":370000,"user_id":21},{"id":341,"abono":0,"comentario":"Ok","fecha_hasta":"2015-10-01","fecha_pago":"2016-07-17","intereses":40000,"saldo":300000,"user_id":18},{"id":342,"abono":500000,"comentario":"Presto 500 debe 4000","fecha_hasta":"2016-07-25","fecha_pago":"2016-07-25","intereses":0,"saldo":565000,"user_id":77},{"id":343,"abono":200000,"comentario":"Ok","fecha_hasta":"2016-07-27","fecha_pago":"2016-07-26","intereses":219000,"saldo":1990000,"user_id":71},{"id":344,"abono":1500000,"comentario":"Ok","fecha_hasta":"2016-07-28","fecha_pago":"2016-07-28","intereses":180000,"saldo":2500000,"user_id":83},{"id":345,"abono":0,"comentario":"Ok","fecha_hasta":"2015-10-06","fecha_pago":"2016-07-29","intereses":60000,"saldo":600000,"user_id":50},{"id":346,"abono":0,"comentario":"Ok","fecha_hasta":"2016-07-30","fecha_pago":"2016-07-30","intereses":55000,"saldo":300000,"user_id":52},{"id":347,"abono":50000,"comentario":"Ok","fecha_hasta":"2016-08-07","fecha_pago":"2016-08-10","intereses":45000,"saldo":250000,"user_id":39},{"id":348,"abono":65000,"comentario":"A partir del 25 julio 500000","fecha_hasta":"2016-08-11","fecha_pago":"2016-08-11","intereses":5000,"saldo":500000,"user_id":77},{"id":349,"abono":0,"comentario":"Tiene 10 a favor","fecha_hasta":"2016-05-15","fecha_pago":"2016-08-12","intereses":50000,"saldo":150000,"user_id":20},{"id":350,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-08-01","fecha_pago":"2016-08-01","intereses":100000,"saldo":2600000,"user_id":78},{"id":351,"abono":100000,"comentario":"Ok","fecha_hasta":"2016-08-15","fecha_pago":"2016-08-13","intereses":112000,"saldo":2500000,"user_id":78},{"id":352,"abono":0,"comentario":"24000 a favor","fecha_hasta":"2016-05-14","fecha_pago":"2016-06-11","intereses":816000,"saldo":3300000,"user_id":64}];
  
  $timeout(function() {
	// allUsers = Users.all();
	// allUsers.then(function (res) {
	// 	console.log(JSON.stringify(res))
	// 	$scope.users = res;
 //    $ionicLoading.hide();
	// }, function (err) {
	// 	$ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2200, showBackdrop: false});
	// });

	// Descomentar esto para agregar info predeterminada a la app
    // aa = Users.insertAll($scope.esto);
    // aa.then(function (res) {
    // }, function (err) {
    //   $ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2200, showBackdrop: false});
    // });

    // aaa = Users.insertAllDos($scope.aquello);
    // aaa.then(function (res) {
    // }, function (err) {
    //   $ionicLoading.show({template: '<i class="icon ion-close-round"></i><p>Algo salio mal</p>', duration: 2200, showBackdrop: false});
    // });

   	// Extract all paies
    aaa = Pagos.extract();
    aaa.then(function (res) {
    	console.log("COME ON!")
		console.log(JSON.stringify(res))
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