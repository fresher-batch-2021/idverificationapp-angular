import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  yourname:string="" ;
  date_of_birth:string="" ;
  emailid:string="";
  username:string="";
  create_password:string="";
  confirmpassword:string="";



  registration(){
    if(this.yourname =="" ){
      alert("Invalid");
    }
    if(this.emailid == "" ){
      alert("invalid email");
    }
    if(this.username == "" ){
      alert("invalid username");
    }
    if(this.create_password == "" ){
      alert("invalid password");
    }
    if(this.confirmpassword == "" ){
      alert("No_match_password");
    }
    else{
      alert("successfull");
      window.location.href="loginpage"
    }
  }


}
