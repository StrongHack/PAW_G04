import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup; // Declare userForm property

  constructor(
    public auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.auth.buildUserForm();
  }

  ngOnInit(): void {}

  register(): void {
    if (this.userForm.valid) {
      const { name, email, password } = this.userForm.value;
      this.auth.register(name, email, password).subscribe(
        (user: any) => {
          if (user && user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            console.log(user);
            this.router.navigate(['/sucess']);
          }
        },
        (err) => {
          if (err.status == 409) {
            alert('Email already exists.');
          }
          if (err.status == 400) {
            alert('Information entered is incorrect.');
          }
        }
      );
    }
  }
}
