var app;
(function (app) {
    var todolist;
    (function (todolist) {
        var todoListViewModel = (function () {
            function todoListViewModel(data, name) {
                this.data = data;
                alert("hello " + name);
            }
            return todoListViewModel;
        })();
        todolist.todoListViewModel = todoListViewModel;
    })(todolist = app.todolist || (app.todolist = {}));
})(app || (app = {}));
