/// <reference path="todo-list-viewModel.ts" />
namespace app.todolist {
    var data = [
        { id: 1, name: "Kiss Pashmi" },
        { id: 2, name: "Make dinner" }
    ];

    var viewModel = new todoListViewModel(data);
    
    $(document).ready(()=>{
        ko.applyBindings(viewModel);
    });

}