import { Component, OnInit } from '@angular/core';
import axios from 'axios';

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
  emailid:string="";
  username:string="";
  number:string="";
  create_password:string="";
  confirmpassword:string="";



  registration(){
    if(this.yourname =="" ){
      alert("Invalid");
    }
   else if(this.emailid == ""|| this.emailid==null ){
      alert("invalid email");
    }
  else  if(this.number =="" || this.number.length !=10){
      alert("Enter_phone_number")
    }
  else  if(this.username == "" ){
      alert("invalid username");
    }
  else  if(this.create_password == "" ){
      alert("invalid password");
    }
  else  if(this.confirmpassword !== this.create_password ){
      alert("No_match_password");
    } 
    else{
      const url = "https://product-mock-api.herokuapp.com/identityapp/api/v1/auth/register"
      const registerData = {
          name: this.yourname,
          email: this.emailid,
          username: this.username,
          mobileNo: this.number,
          password: this.create_password  
        }
      
      axios.post(url, registerData).then(res => {
          console.log(registerData);
          alert("successfull")
          window.location.href ="loginpage"
        }).catch(err => alert("error "))
      }
  }


}
