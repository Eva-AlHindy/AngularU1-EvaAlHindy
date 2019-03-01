import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
//we define an array to save the value (userName) which we sent from edituser component to dashboard component
userList:string[] =[];
userName:string;

//a method which we used to addUserName and this value in userList array by using push method
addUserName(event):void{
 this.userName = event;
console.log(this.userName);
this.userList.push(this.userName);
console.log(this.userList);

}
//a method which we used to removeUserName from userList array by using pop method 
removeUserName(event):void{
this.userList.pop();
console.log(this.userList);
}

  constructor() {

  }

  ngOnInit() {
  }



}
