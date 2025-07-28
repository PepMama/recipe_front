// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient }   from '@angular/common/http';
import { Observable }   from 'rxjs';

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  register(payload: RegisterPayload): Observable<any> {
    return this.http.post(`${this.apiUrl}/user/create-user`, payload);
  }

  login(payload: LoginPayload): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/user/login`, payload);
  }
}
