import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public ocultar: boolean;

  constructor(public auth: AuthService) { this.ocultar = false;}

  ngOnInit() {
  	this.auth.getAuth().subscribe( auth =>{
  		if (auth && localStorage.getItem("rol") != "client") {
  			this.ocultar = true;
        console.log("esta logeado y no es un cliente")
  		}else{
        console.log("eres un cliente")
      }
  		
  	})
  }

  onClickLogout(){
  	this.auth.logout();
    localStorage.setItem("rol", "client")
  }

}