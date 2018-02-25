import { Component, OnInit } from '@angular/core';
import {Http}from '@angular/http';


import {Router} from '@angular/router';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:Http,private router: Router) { }
  userObj:User;
  ngOnInit() {

  }
  validateUser(user){
   var x= this.http.get("http://localhost:5555/users");
   x.subscribe(
      (item)=>{
       
        let user_data = item.json();
       
        user_data.forEach(element => {

          console.log(" user_data"+element);
          console.log(" user_data"+element.username);
          console.log(" user"+user.UserName);

          if(element.username===user.UserName){
        
            this.router.navigateByUrl("/home");
          }
          
        });
       
        

        

      });
    

  } 

}
