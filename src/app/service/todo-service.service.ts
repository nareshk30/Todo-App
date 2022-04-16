import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos:Todo[];
  constructor() { 
    this.todos=[
      {
        id : "111",
        title : "Learn Spring",
        isCompleted : true,
        date : new Date()
    },
    {
      id : "222",
      title : "Learn Angular",
      isCompleted : true,
      date : new Date()
  },
  {
    id : "333",
    title : "Learn AWS",
    isCompleted : true,
    date : new Date()
},
  ]
  }
  getTodos(){
    return of(this.todos);
  }
  addTodos(todo:Todo){
    this.todos.push(todo);
  }
  changeStatus(todo:Todo){
    this.todos.map(singleTodo=>{
      if(singleTodo.id==todo.id){
        todo.isCompleted=!todo.isCompleted;
      }
    })
  }
  removeTodo(todo:Todo){
    const TodoId=this.todos.findIndex(
      (currentObj)=>currentObj.id===todo.id);
      this.todos.splice(TodoId,1);
  }
  
}
