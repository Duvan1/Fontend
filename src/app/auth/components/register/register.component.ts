import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../core/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public email: string;
	public pass: string;
	public retryPass: string;

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
  	if (this.pass == this.retryPass) {
  		this.auth.registerUser(this.email, this.pass).
  		then( (res)=>{
  			this.router.navigate(['/admin']);
  		}).catch( (err) => {
  			console.log(err);
  		});
  	}else{console.log("repitala");}
  	
  }

}
