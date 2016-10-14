var app;
(function (app) {
    var todolist;
    (function (todolist) {
        var data = [
            { id: 1, name: "Kiss Pashmi" },
            { id: 2, name: "Make dinner" },
            { id: 3, name: "Sleep" },
        ];
        var viewModel = new todolist.todoListViewModel(data);
        $(document).ready(function () {
            ko.applyBindings(viewModel);
        });
    })(todolist = app.todolist || (app.todolist = {}));
})(app || (app = {}));
