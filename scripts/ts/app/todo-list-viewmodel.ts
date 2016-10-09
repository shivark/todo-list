/// <reference path="../../../typings/index.d.ts" />
namespace app.todolist{    
    export class todoListViewModel{
        
        items: KnockoutObservable<Array<any>>
        
        constructor(public data:any[]){
           this.items = ko.observable(data); 
           
        }

        //Add an item

        //Remove an item
    }
}