import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../service/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) { }
  
  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
