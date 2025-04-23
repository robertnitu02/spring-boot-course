import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  variableName = 'token';

  set token(token: string) {
    localStorage.setItem(this.variableName, token);
  }

  get token() {
    return localStorage.getItem(this.variableName) as string;
  }
}
