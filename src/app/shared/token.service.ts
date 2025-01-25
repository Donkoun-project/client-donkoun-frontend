import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly TOKEN_KEY = 'authToken';

  constructor() {}

  // Enregistrer le token dans sessionStorage
  setToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  // Récupérer le token depuis sessionStorage
  getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  // Supprimer le token de sessionStorage
  removeToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }

  // Vérifier si un token existe dans sessionStorage
  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }
}
