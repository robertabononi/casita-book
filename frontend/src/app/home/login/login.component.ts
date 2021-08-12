import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = '';
  password: string = '';

  // tslint:disable-next-line: no-empty
  constructor() { }

  // tslint:disable-next-line: no-empty
  ngOnInit(): void {
  }

  onLogin() {
    // tslint:disable: no-console
    console.log(this.user);
    console.log(this.password)
  }

}
