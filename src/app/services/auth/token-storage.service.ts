import { Injectable } from '@angular/core';

@Injectable()
export class TokenStorageService {
  private jwtToken: string;

  constructor() {
  }

  setJwtToken(token: string) {
    this.jwtToken = token;
  }

  getJwtToken() {
    return this.jwtToken;
  }
}
