import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  username:string="" ;
  password:string="" ;

  login(){
    if(this.username =="" ){
      alert("Invalid");
    }
    if(this.password == "" ){
      alert("invalid password");
    }
    else{
      alert("successfull");
      window.location.href="index"
    }
  }
}
