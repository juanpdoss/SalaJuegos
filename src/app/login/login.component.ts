import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}
  //singInWithEmailAndPassword

  Loguear() {
    this.authService
      .SignIn(this.user.email, this.user.password)
      .catch((user) => {
        console.log(user);
      });
  }

  GuardarMensaje() {}

  ngOnInit(): void {}
}
