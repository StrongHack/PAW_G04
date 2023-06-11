import { Component, OnInit } from '@angular/core';
import { ClientServiceService } from '../../service/client-service.service';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private clientService: ClientServiceService,
                private authenticationService: AuthenticationService, 
               private router: Router,) {}

  ngOnInit() {
    this.clientService.getProfile().subscribe(
      (response) => {
        this.user = response;
      },
      (error) => {
        console.log('Erro ao obter o perfil do usuÃ¡rio:', error);
      }
    );
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/homepage']);
  }
}
