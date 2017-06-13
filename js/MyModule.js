/**
 * Created by Administrator on 2017/5/7.
 */
var app=angular.module("myapp",["ngRoute"])
    .config(["$routeProvider",function($routeProvider){
        $routeProvider
            .when("/kexue",{templateUrl:"kexue.html",controller:"kexuecontroller"})
            .when("/lishi",{templateUrl:"lishi.html",controller:"lishicontroller"})
            .when("/gouwu",{templateUrl:"gouwu.html",controller:"gouwu"})
            .when("/renwen",{templateUrl:"renwen.html",controller:"renwencontroller"})
            .when("/jiaoke",{templateUrl:"jiaoke.html",controller:"jiaokecontroller"})
            .when("/xinxi",{templateUrl:"xinxi.html",controller:"xinxicontroller"})
            .when("/tianjia",{templateUrl:"tianjia.html",controller:"xinxicontroller"})
            .when("/xiugai",{templateUrl:"updatebooks.html",controller:"updatebookscontroller"})
            .when("/shanchu",{templateUrl:"deletebooks.html",controller:"deletebookscontroller"})
            .when("/", {templateUrl: "default.html"})
            .otherwise("/");
}]);
    app.factory("MyFactory",function($http){
        var datainfo={};
        return{
            datainfo:function(){
                return $http.post("data/data.txt").success(function(data){
                    return data;
                })
            }
        }
    }).factory("insert",function(){
        var book=[];
        return{
            insertinfo:function(b){
                book.push(b);
            },
            selectinfo:function(){
                return book;
            }
        }
    })

