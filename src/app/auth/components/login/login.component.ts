import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './../../../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public pass: string;

  constructor(private router:Router, private auth:AuthService) { }

  ngOnInit() {
  }

  onSubmitLogin() {    
    this.auth.loginEmail(this.email, this.pass)
    .then( (res)=>{
      console.log(this.email+" "+this.pass);
      this.router.navigate(['/admin']);
    }).catch( (err)=>{
      console.log("ocurrio un error manito: "+err);
      this.router.navigate(['/login']);
    })  
  }

}
