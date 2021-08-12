import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = '';
  password: string = '';

  // tslint:disable-next-line: no-empty
  constructor(private authService: AuthenticationService) { }

  // tslint:disable-next-line: no-empty
  ngOnInit(): void {
  }

  onLogin() {
    this.authService.authenticate(this.user, this.password).subscribe(() => {
      // tslint:disable: no-console
      console.log('Autenticado com sucesso');
    }, (error) => {
      alert('Usuário ou senha inválido');
      console.log(error)
    })
  }
}
