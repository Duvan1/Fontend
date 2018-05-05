import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './../../../core/service/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public pass: string;

  constructor(
    private router:Router,
    private auth:AuthService,
    public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitLogin() {    
    this.auth.loginEmail(this.email, this.pass)
    .then( (res)=>{
        if(this.email == "admin@admin.com"){
          localStorage.setItem("rol", "admin");
          console.log(this.email+"es un: "+localStorage.getItem("rol"));
        }else if(this.email == "vende@vende.com"){
          localStorage.setItem("rol", "vende");
          console.log(this.email+"es un: "+localStorage.getItem("rol"));
        }

        if (localStorage.getItem("rol") != "client") {
          this.router.navigate(['/admin']);
        }else{
          this.router.navigate(['/home']);          
        }
        window.location.reload();        
      
    }).catch( (err)=>{
      this.flashMensaje.show("Ocurrio un error manito: "+err.message,
      {cssClass: 'alert alert-danger', timeout: 4000});
      this.router.navigate(['/login']);
    })
  }
}