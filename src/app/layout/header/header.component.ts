import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuthenticated: boolean= true;
baniere: boolean = true
  currentPath: string = '';
  path: string;
  constructor(
    private _router: ActivatedRoute,
    public _shared: SharedService,
    private _token: TokenService
  ) { 
  this.isAuthenticated = this._token.isAuthenticated()
  }

  ngOnInit(): void {
    this.getPath()
  }

  getPath(): void {
    // Combine tous les segments de l'URL active pour obtenir le chemin complet
    this.path = this._router.snapshot.pathFromRoot
      .map(segment => segment.routeConfig?.path)
      .filter(path => path) // Filtrer les segments vides ou indéfinis
      .join('/');

  }

  setBaniereStatus(){
    this._shared.baniereImage = false;
  }
}
