var app = angular.module('app', ['ngTouch', 'ui.grid', 'ui.grid.cellNav', 'ui.grid.edit', 'ui.grid.resizeColumns', 'ui.grid.pinning', 'ui.grid.selection', 'ui.grid.moveColumns', 'ui.grid.exporter', 'ui.grid.importer', 'ui.grid.grouping']);

app.controller('MainCtrl',  ['$scope', '$http', '$timeout', '$interval', 'uiGridConstants',
 function ($scope, $http, $timeout, $interval, uiGridConstants) {

 /*Get full json file */     
$http.get('fullData.json')
    .success(function(data) {
      console.log(data[0].metaData);
      $scope.colDefData = data[0].metaData;
        console.log(data[1].rawData);
      $scope.theData = data[1].rawData;

     
/* Get the ColumnDefjson */
/*  $scope.colDefData = [
    { "name":"id", "width":"50" },
    { "name":"name", "width":"100" }];
/*  $http.get('columnDef.json')
  .success(function(result){
   console.log ("success info");
   $scope.colDefData = result.data;
      $scope.colDefData =[
    { "name":"sid", "width":"50" },
    { "name":"sname", "width":"100" }];
 })
    .error(function(data){
     console.log ("some info");
      $scope.colDefData =[
    { "name":"id", "width":"50" },
    { "name":"name", "width":"100" }];
 });
*/

  $scope.gridOptions = {};
  $scope.gridOptions.data = 'myData';
  $scope.gridOptions.enableColumnResizing = true;
  $scope.gridOptions.enableFiltering = true;
  $scope.gridOptions.enableGridMenu = true;
  $scope.gridOptions.showGridFooter = true;
  $scope.gridOptions.showColumnFooter = true;
  $scope.gridOptions.fastWatch = true;

  $scope.gridOptions.rowIdentity = function(row) {
    return row.id;
  };
  $scope.gridOptions.getRowIdentity = function(row) {
    return row.id;
  };

$scope.gridOptions.columnDefs = $scope.colDefData;
     
  $scope.callsPending = 0;
    })
        .error(function() {
          $scope.callsPending--
        });
     

  var i = 0;
  $scope.refreshData = function(){
  $scope.myData = [];
  $scope.oldDefData = [
    { "name":"id", "width":"50" },
    { "name":"name", "width":"100" }];
  console.log($scope.oldDefData);
  $scope.gridOptions.columnDefs = $scope.colDefData;
  console.log($scope.colDefData);
  $scope.myData = $scope.theData;  
  }
  
     
}]);
    
