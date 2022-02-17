import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
 name=''
 greet=''
 errorMessage=''
  constructor(private route:ActivatedRoute, private service:WelcomeDataService) {
    this.name=route.snapshot.params['name']
   }

  ngOnInit(): void {
  }

  welcomeMessage()
  {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfullResponse(response.name,response.greet),
      error => this.handleError(error.error.message));
    
  }

  welcomeMessageWithPathVariable()
  {
    this.service.executeHelloWorldServiceWithPathVariable("Lotus","Good Morning").subscribe(
      response => this.handleSuccessfullResponse(response.name,response.greet),
      error => this.handleError(error.error.message));
    
  }

  handleSuccessfullResponse(name:string,greet:string)
  {
    this.name=name;
    this.greet=greet;
  }

  handleError(error:string)
  {
    this.errorMessage=error;
  }
}
