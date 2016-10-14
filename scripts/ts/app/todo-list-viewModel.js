var app;
(function (app) {
    var todolist;
    (function (todolist) {
        var todoListViewModel = (function () {
            function todoListViewModel(data) {
                this.data = data;
                this.items = ko.observable(data);
            }
            return todoListViewModel;
        }());
        todolist.todoListViewModel = todoListViewModel;
    })(todolist = app.todolist || (app.todolist = {}));
})(app || (app = {}));
