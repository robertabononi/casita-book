import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = '';
  password: string = '';

  // tslint:disable: no-empty
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.authService.authenticate(this.user, this.password).subscribe(() => {
      this.router.navigate(['comodos']);
    }, (error) => {
      alert('Usuário ou senha inválido');
      // tslint:disable: no-console
      console.log(error)
    })
  }
}
