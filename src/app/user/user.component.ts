import { Component, OnInit } from '@angular/core';
import {UserService}  from "./user.service";
@Component({
  selector: 'fa-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
 
})
export class UserComponent implements OnInit {

user: {name:string};
isLoggedIn=true;
  constructor(private userService:UserService) { }

  ngOnInit() {

    this.user=this.userService.user
  }

}
