import { Component, OnInit } from '@angular/core';
import { AuthService } from './../core/service/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public auth: AuthService, public route: Router) { }

  ngOnInit() {
  }

  salir(){
  	this.auth.logout();
    localStorage.setItem("rol", "client");
    this.route.navigate(['/home']);
    window.location.reload();

  }

}
