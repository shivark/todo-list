/// <reference path="todo-list-viewModel.ts" />
var app;
(function (app) {
    var todolist;
    (function (todolist) {
        var data = [
            { id: 1, name: "Kiss Pashmi" },
            { id: 2, name: "Make dinner" }
        ];
        var viewModel = new todolist.todoListViewModel(data, "shiva");
    })(todolist = app.todolist || (app.todolist = {}));
})(app || (app = {}));
