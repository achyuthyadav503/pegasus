import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers}from '@angular/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http:Http,private router: Router) { }
  conformationString:string="New User has been added";
  isAdded:boolean=false;
  userObj:object=[];
  //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  emailPattern ="^\\w+([\\.-]?\\w+)*@\\w+([\.-]?\\w+)*(\\.\\w{2,3})+$";
  textpattern="^[a-zA-Z\\s]+$"; 

  ngOnInit() {
  }
  addNewUser=function (user) {
    this.userObj={
      "username":user.UserName,
      "password":user.PassWord,
      "FirstName": user.FirstName,
      "LastName": user.LastName,
      "Qualification": user.Qualification,
      "Occupation": user.Occupation,
      "Industry": user.Industry,
      "Firm": user.Firm,
      "Workinglocation": user.Workinglocation,
      "PersonalEmailID": user.PersonalEmailID,
      "OfficialEmailID": user.OfficialEmailID
    }
    this.http.post("http://localhost:5555/users",this.userObj).
    subscribe((res:Response)=>{
     this.isAdded=true;
     this.router.navigateByUrl("/home");
    })
  }


}
