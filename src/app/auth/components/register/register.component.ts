import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/service/auth.service';
import { Router } from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public email: string;
	public pass: string;
	public retryPass: string;

  constructor(public auth: AuthService, public router: Router, public flashMensaje: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
  	if (this.pass == this.retryPass) {
  		this.auth.registerUser(this.email, this.pass).
  		then( (res)=>{
        localStorage.setItem("rol", "client");
  			this.router.navigate(['/home']);
        
  		}).catch( (err) => {
  			this.flashMensaje.show("Ocurrio un error ompita: "+err,
      {cssClass: 'alert alert-danger', timeout: 4000});
  		});
  	}else{
      this.flashMensaje.show("Las contraseñas no coinciden ",
      {cssClass: 'alert alert-danger', timeout: 4000});
    }
  	
  }

}
