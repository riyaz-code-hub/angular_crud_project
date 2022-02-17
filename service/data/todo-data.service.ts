import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  username=''
  constructor(private http:HttpClient) { }


  retrieveAllTodos(username:string)
  { 
    
    return this.http.get<Todo[]>(`http://35.192.73.158:8080/users/${username}/todos`);
    
  }

  deleteTodo(id:number,username:string)
  { 
    
    return this.http.delete(`http://35.192.73.158:8080/users/${username}/todo/${id}`);
    
  }

  retrieveTodo(username:string,id:number)
  { 
    
    return this.http.get<Todo>(`http://35.192.73.158:8080/users/${username}/todos/${id}`);
    
  }
  updateTodo(username:string,id:number,todo)
  { 
    
    return this.http.put(`http://35.192.73.158:8080/users/${username}/todos/${id}`,todo);
    
  }
  createTodo(username:string,todo)
  { 
    
    return this.http.post(`http://35.192.73.158:8080/users/${username}/todos`,todo);
    
  }
  
}


