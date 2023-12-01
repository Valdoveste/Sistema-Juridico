import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/USUARIO.model';
import { jwtDecode } from "jwt-decode";

const TOKEN_KEY = 'auth-token';
const USER_MODEL = 'user-model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  URL_API: string | undefined = environment.URL_API;

  postLogin(requestUsuario: Usuario): Observable<[token: string]> {
    return this.http.post<[token: string]>(this.URL_API + '/api/Login/auth', requestUsuario);
  }

  signOut(): void {
    window.sessionStorage.clear();
    this.router.navigate(['']);
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUserModel(userModel: string): void {
    window.sessionStorage.removeItem(USER_MODEL);
    window.sessionStorage.setItem(USER_MODEL, JSON.stringify(userModel));
  }

  public getUserModel(): string | null {
    return window.sessionStorage.getItem(USER_MODEL);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  getDecodedAccessToken(): Usuario | null {
    const token = this.getToken();
    try {
      return jwtDecode(token!);
    } catch (Error) {
      return null;
    }
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Convert to seconds

      return decodedToken.exp > currentTime;
    }
    return false;
  }

}
