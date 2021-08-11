import { Component, OnInit } from '@angular/core';
import axios from 'axios';

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
      const url = "https://product-mock-api.herokuapp.com/identityapp/api/v1/auth/login"
        const loginData = {
            username:this.username,
            password: this.password
        }
    
        axios.post(url, loginData).then(res => {
            console.log(loginData);
            alert("successfull")
            window.location.href = "index";
          }).catch(err => alert(" invalid details"))
        }
  }
}
