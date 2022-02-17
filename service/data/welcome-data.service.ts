import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService()
  { 
    //return this.http.get<HelloWorldBean>('http://35.192.73.158:8080/hello-world/test-bean');
    //return this.http.get('http://35.192.73.158:8080/hello-world/test-bean');
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world/test-bean');
    //console.log("Execute Hello World bean sdervice")
  }

  executeHelloWorldServiceWithPathVariable(name:string,greet:string)
  { 
    ///hello-world/test-bean/name/{name}/greet/{greet}
    //return this.http.get<HelloWorldBean>('http://35.192.73.158:8080/hello-world/test-bean');
    //return this.http.get('http://35.192.73.158:8080/hello-world/test-bean');
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/test-bean/name/${name}/greet/${greet}`);
    //console.log("Execute Hello World bean sdervice")
  }

  
}


export class HelloWorldBean{
  constructor(public name:string,public greet:string){}
}


