import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransportInfo } from './model/parcel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PercelService {
  private apiUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

   // 📌 Créer un transport
   createTransport(transport: TransportInfo): Observable<TransportInfo> {
    return this._http.post<TransportInfo>(this.apiUrl+"/trips", transport);
  }
}
