import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import apiRoutes from 'src/app/config/apiRoutes';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  auth(data: {login: string, password: string}): any {
    return this.http.post(apiRoutes.auth.login, data, {

    })
  }
}
