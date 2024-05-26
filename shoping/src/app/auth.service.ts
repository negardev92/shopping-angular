import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://console.firebase.google.com/project/shop2-f201d/authentication/users';

  constructor(private http: HttpClient) { }

  async login(username: string, password: string) {
    console.log(username)
    console.log(password)
    try {
      this.http.post(`${this.apiUrl}/login`, { username, password })
        .pipe(
          tap((response: any) => {
            if (response && response.status === 200) {
              localStorage.setItem('token', response.token);
            } else {
              return false;
            }
          })
        )
        .subscribe();
        
      // return true;
    } catch (error) {
      // Handle error
      console.error('Error logging in:', error);
    
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}