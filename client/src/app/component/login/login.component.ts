import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../app.component.scss']
})
export class LoginComponent {

  credentials = {username: '', password: ''};

  constructor(private userService: UserService, private http: HttpClient, private router: Router) {}

  login() {
    this.userService.authenticate(this.credentials, () => {
        this.router.navigateByUrl('/');
    });
    return false;
  }
}
