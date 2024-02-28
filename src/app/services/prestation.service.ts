import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  constructor(private Http: HttpClient) { }
  token: any = sessionStorage.getItem('jwtToken')

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Replace 'your_token_here' with the actual token
      'Authorization': `Bearer ${this.token}`
    })
  };

  getAllPrestations() {
    return this.Http.get(environment.baseUrl+"prestations/list", this.httpOptions);
  }
}
