/// <reference path="../../../node_modules/@types/knockout/index.d.ts" />
/// <reference path="../../../node_modules/@types/jquery/index.d.ts" />
/// <reference path="todo-list-viewModel.ts" />
namespace app.todolist {
    var data = [
        { id: 1, name: "Kiss Pashmi" },
        { id: 2, name: "Make dinner" },
        { id: 3, name: "Sleep" },
    ];

    var viewModel = new todoListViewModel(data);
    
    $(document).ready(()=>{
        ko.applyBindings(viewModel);
    });

}