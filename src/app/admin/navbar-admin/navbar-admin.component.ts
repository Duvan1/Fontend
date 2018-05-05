import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../core/service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  public vende: boolean;

  constructor(public auth: AuthService, public route: Router) { }

  ngOnInit() {
    if (localStorage.getItem("rol") == "vende") {
      this.vende = true;
      console.log("no es vendedor");
    }else{
      this.vende = false;
      console.log("es vendedor");
    }
  }

  salir(){
  	this.auth.logout();
    localStorage.setItem("rol", "client");
    this.route.navigate(['/home']);
    window.location.reload();

  }

}
