/**
 * Created by Administrator on 2017/5/7.
 */
var i;
app.controller("mycontroller", function ($scope, $http) {
    $http.post("data/title.txt").success(function (data) {
        $scope.titleinfo = data;
    });
    $http.post("data/data.txt").success(function (data) {
        i = data;
    });
    /*点击li菜单，控制显示隐藏*/
    $scope.click_liinfo = function (index) {
        for (var i = 0; i < $scope.titleinfo.length; i++) {
            document.getElementsByClassName("ul_child")[i].style.display = "none";
        }
        document.getElementsByClassName("ul_child")[index].style.display = "block";
    }
})
    .controller("kexuecontroller", function ($scope, $location, $http, MyFactory,insert) {
        $scope.way = $location.absUrl().split("/")[5];
        $scope.kexuedata = [];
        MyFactory.datainfo().then(function (res) {
            $scope.bookinfo = res.data;
            for (var i = 0; i < $scope.bookinfo.length; i++) {
                if ($scope.bookinfo[i].type == $scope.way) {
                    $scope.kexuedata.push($scope.bookinfo[i]);
                    $scope.bookdeatils = $scope.kexuedata[0];
                }
            }

        });
        $scope.clickbooks = function (index) {
            $scope.bookdeatils = $scope.kexuedata[index];
        };
        $scope.num = 1;
        $scope.numclick = function (way) {
            if (way == "-") {
                $scope.num--;
                if ($scope.num <= 0) {
                    $scope.num = 1;
                }
            }
            else {
                $scope.num++;
            }
        }
        $scope.insertShop = function (book) {
            window.location = "http://localhost:63342/myself_luyou/index.html#/gouwu";
            book.num = $scope.num;
            insert.insertinfo(book);
        }
    })
    .controller("lishicontroller", function ($scope, $location, $http, MyFactory,insert) {
        $scope.address = $location.absUrl().split("/")[5];
        $scope.lishidata = [];
        MyFactory.datainfo().then(function (res) {
            $scope.booklishi_info = res.data;
            for (var i = 0; i < $scope.booklishi_info.length; i++) {
                if ($scope.booklishi_info[i].type == $scope.address) {
                    $scope.lishidata.push($scope.booklishi_info[i]);
                    $scope.lishidetalis = $scope.lishidata[0];
                }
            }
        });
        $scope.clicklishibooks = function (index) {
            $scope.lishidetalis = $scope.lishidata[index];
        };
        $scope.num = 1;
        $scope.numclick = function (way) {
            if (way == "-") {
                $scope.num--;
                if ($scope.num <= 0) {
                    $scope.num = 1;
                }
            }
            else {
                $scope.num++;
            }
        };
        $scope.insertShop = function (book) {
            window.location = "http://localhost:63342/myself_luyou/index.html#/gouwu";
            book.num = $scope.num;
            insert.insertinfo(book);
        }
    })
    .controller("renwencontroller", function ($scope, $location, $http, MyFactory,insert) {
        $scope.address_renwen = $location.absUrl().split("/")[5];
        $scope.renwendata = [];
        MyFactory.datainfo().then(function (res) {
            $scope.bookrenwen_info = res.data;
            for (var i = 0; i < $scope.bookrenwen_info.length; i++) {
                if ($scope.bookrenwen_info[i].type == $scope.address_renwen) {
                    $scope.renwendata.push($scope.bookrenwen_info[i]);
                    $scope.renwendeatils = $scope.renwendata[0];
                }
            }
        });
        $scope.clickrenwenbooks = function (index) {
            $scope.renwendeatils = $scope.renwendata[index]
        };
        $scope.num = 1;
        $scope.numclick = function (way) {
            if (way == "-") {
                $scope.num--;
                if ($scope.num <= 0) {
                    $scope.num = 1;
                }
            }
            else {
                $scope.num++;
            }
        };
        $scope.insertShop = function (book) {
            window.location = "http://localhost:63342/myself_luyou/index.html#/gouwu";
            book.num = $scope.num;
            insert.insertinfo(book);
        }
    })
    .controller("jiaokecontroller", function ($scope, $location, $http, MyFactory,insert) {
        $scope.address_jiaoke = $location.absUrl().split("/")[5];
        $scope.jiaokedata = [];
        MyFactory.datainfo().then(function (res) {
            $scope.bookjiaoke_info = res.data;
            for (var i = 0; i < $scope.bookjiaoke_info.length; i++) {
                if ($scope.bookjiaoke_info[i].type == $scope.address_jiaoke) {
                    $scope.jiaokedata.push($scope.bookjiaoke_info[i]);
                    $scope.jiaokedeatils = $scope.jiaokedata[0];
                }
            }
        });
        $scope.clickjiaokebooks = function (index) {
            $scope.jiaokedeatils = $scope.jiaokedata[index]
        };
        $scope.num = 1;
        $scope.numclick = function (way) {
            if (way == "-") {
                $scope.num--;
                if ($scope.num <= 0) {
                    $scope.num = 1;
                }
            }
            else {
                $scope.num++;
            }
        };
        $scope.insertShop = function (book) {
            window.location = "http://localhost:63342/myself_luyou/index.html#/gouwu";
            book.num = $scope.num;
            insert.insertinfo(book);
        }
    })
    .controller("gouwu", function ($scope, insert) {
        $scope.Shopbook = [];
        $scope.Shopbook = insert.selectinfo()
        //点击操作当前的购物车
        $scope.clickdelete = function (index) {
            $scope.Shopbook.splice(index, 1);
        }
    })
    .controller("xinxicontroller", function ($scope) {
        $scope.id = '';
        $scope.name = '';
        $scope.author = '';
        $scope.leixing = '';
        $scope.time = '';
        $scope.xinxi = i;
        $scope.click_tianjia = function () {
            $scope.datalist = {
                "id": $scope.xinxi.length + 1,
                "type": "jiaoke",
                "leixing": $scope.leixing,
                "name": $scope.name,
                "author": $scope.author,
                "img": "1.jpg",
                "num": "1",
                "detailinfo": {
                    "time": $scope.time,
                    "address": "",
                    "price": "67",
                    "totalpage": "767",
                    "bookid": "213131",
                    "title": ""
                }
            };
            i.push($scope.datalist);
            window.location = "http://localhost:63342/myself_luyou/index.html#/xinxi";
        };
        //一页显示10条数据
        $scope.pagenum=9;
        //总页数
        $scope.totlepage=0;
        //
        $scope.bookInfo=0;
        //保存页数的数组
        $scope.pageNumArray=[];


        $scope.totlepage=Math.ceil($scope.xinxi.length/$scope.pagenum);
        $scope.bookInfo=$scope.xinxi.slice(0,$scope.pagenum);
        for(var j=0;j<$scope.totlepage;j++){
            $scope.pageNumArray.push(j+1);
        }
        $scope.click_li=function(index){
            $scope.bookInfo=$scope.xinxi.slice(index*$scope.pagenum,(index+1)*$scope.pagenum)
        }
    })
    .controller("updatebookscontroller", function ($scope) {
        $scope.update_txt=i;
        $scope.bookindex=0;
        $scope.click_xiugai = function (index) {
            $scope.bookindex=index;
            $scope.dataxiugai = {
                "type":$scope.update_txt[$scope.bookindex].type,
                "leixing": $scope.update_txt[$scope.bookindex].leixing,
                "name": $scope.update_txt[$scope.bookindex].name,
                "author": $scope.update_txt[$scope.bookindex].author,
                "img": "1.jpg",
                "num": "1",
                "detailinfo": {
                    "time": $scope.update_txt[$scope.bookindex].detailinfo.time,
                    "address": "",
                    "price": "67",
                    "totalpage": "767",
                    "bookid": "213131",
                    "title": ""
                }
            };
            $scope.clickupdate=function(){
                $scope.update_txt[$scope.bookindex]=$scope.dataxiugai;
                window.location="http://localhost:63342/myself_luyou/index.html#/xinxi";
            }
        }
    })
    .controller("deletebookscontroller",function($scope){
        $scope.delBooks=i;

        $scope.pagenum=9;
        //总页数
        $scope.totlepage=0;
        //
        $scope.bookInfo=0;
        //保存页数的数组
        $scope.pageNumArray=[];


        $scope.totlepage=Math.ceil($scope.delBooks.length/$scope.pagenum);
        $scope.delBooksInfo=$scope.delBooks.slice(0,$scope.pagenum);
        for(var j=0;j<$scope.totlepage;j++){
            $scope.pageNumArray.push(j+1);
        }
        $scope.click_li=function(index){
            $scope.delBooksInfo=$scope.delBooks.slice(index*$scope.pagenum,(index+1)*$scope.pagenum)
        }
        $scope.deleteBooks=function(index){
            $scope.delBooks.splice(index,1);
            window.location="http://localhost:63342/myself_luyou/index.html#/xinxi";
        }
    });
