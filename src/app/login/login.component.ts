import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;
  showSpinner: boolean;

  ngOnInit(): void {
  }

  login(): void {
  	if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["products"]);
    }else {
      alert("Invalid credentials");
    }
  }
}

