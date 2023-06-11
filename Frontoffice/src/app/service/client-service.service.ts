import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private apiUrl = 'http://localhost:3000'; // Substitua pela URL correta da sua API

  constructor(private http: HttpClient) {}

  getProfile(): Observable<any> {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage

    const headers = new HttpHeaders({
      'Authorization': token || '' // Define um valor padrão vazio caso o token seja nulo
    });

    return this.http.get<any>(`${this.apiUrl}/users/profile`, { headers });
  }

  editProfile(user: any): Observable<any> {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage

    const headers = new HttpHeaders({
      'Authorization': token || '' // Define um valor padrão vazio caso o token seja nulo
    });

    return this.http.put<any>(`${this.apiUrl}/users/edit-profile`, user, { headers });
  }

  changePassword(userId: string, newPassword: string): Observable<any> {
    const token = localStorage.getItem('token'); // Obtém o token do localStorage

    const headers = new HttpHeaders({
      'Authorization': token || '' // Define um valor padrão vazio caso o token seja nulo
    });

    return this.http.put<any>(`${this.apiUrl}/users/change-password/${userId}`, { password: newPassword }, { headers });
  }
}
