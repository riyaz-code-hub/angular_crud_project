import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[new Todo(1,'Test  Angular',false,new Date)];
 message ='';

//new Todo(2,'Learn  Docker',true,new Date),
//new Todo(3,'Learn  Kubernete',false,new Date),
//new Todo(4,'Learn  Microservice',true,new Date)]

// todo={
//   id:1,
//   description:'Learn Angular'
// }

  constructor(private todoDataService:TodoDataService,private router:Router) { }

  ngOnInit() {

    this.refreshTodos();
    //return  this.todoDataService.retrieveAllTodos('Riyaz');
  }

  refreshTodos()
  {
    this.todoDataService.retrieveAllTodos('Riyaz').subscribe(
      response=>{
        this.todos=response;
        console.log(response);
      }
    )
  }

  deleteTodo(id:number)
  {
 console.log(`Deleted Item>>> ${id}`);
 this.todoDataService.deleteTodo(id,'Riyaz').subscribe(
   response =>{ console.log(response);
  this.message=`Delete of todo id ${id} successful`;
  this.refreshTodos();
  }
 )
  }

  updateTodo(id:number)
  {
    this.router.navigate(['todos',id]);
  }
  addTodo()
  {
    this.router.navigate(['todos',-1]);
  }
  

}

export class Todo{

  constructor(public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date){}
}