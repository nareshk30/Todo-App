import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/service/todo-service.service';
import { Todo } from 'src/app/model/Todo';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt=faTrashAlt;
  todos:Todo[]=[];
  constructor(private todoservice:TodoServiceService) { }

  ngOnInit(): void {
    this.todoservice.getTodos().subscribe((todos)=>{
      this.todos=todos;
    });
  }
  changeTodoStatus(todo:Todo){
    this.todoservice.changeStatus(todo);
    console.log(todo.isCompleted);
  }
  removeTodo(todo:Todo)
{
  this.todoservice.removeTodo(todo);
}
}
