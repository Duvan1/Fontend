import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/service/auth.service';

@Component({
  selector: 'app-header-bot',
  templateUrl: './header-bot.component.html',
  styleUrls: ['./header-bot.component.css']
})
export class HeaderBotComponent implements OnInit {
	public isLogin: boolean;
	public nombreUser: string
	public emailUser: string

  constructor(public auth: AuthService) { }

  ngOnInit() {
  	this.auth.getAuth().subscribe( auth =>{
  		if (auth) {
  			this.isLogin = true;
	  		this.emailUser = auth.email;
	  		this.nombreUser = auth.displayName;
	  		//|console.log(this.isLogin );
  		}else{
  			this.isLogin = false;
  		}
  		
  	})
  }

  onClickLogout(){
  	this.auth.logout();
    localStorage.setItem("rol", "client");
    window.location.reload();
  }

}
