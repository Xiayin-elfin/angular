/**
 * Created by Administrator on 2017/5/13.
 */
app.service("MyService", function () {
    //获取标题
    var book = [];
    this.insertbook = function (b) {
        book.push(b);
        return book;
    }
})