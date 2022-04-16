import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import { TodoServiceService } from 'src/app/service/todo-service.service';
import{ v4 as uuidv4} from "uuid";
@Component({
  selector: 'app-todos-forms',
  templateUrl: './todos-forms.component.html',
  styleUrls: ['./todos-forms.component.css']
})
export class TodosFormsComponent implements OnInit {

  todoTitle:string;
  constructor(private todoservice: TodoServiceService) { }

  ngOnInit(): void {
  }

  handleAdd():void{
    const newtodo:Todo={
      id:uuidv4(),
      title:this.todoTitle,
      isCompleted:false,
      date:new Date(),
    };
    this.todoservice.addTodos(newtodo);
  }
}
