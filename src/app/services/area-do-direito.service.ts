import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoAreaDoDireito } from '../models/PROCESSO_AREA_DO_DIREITO.model';

@Injectable({
  providedIn: 'root'
})
export class AreaDoDireitoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAreaDoDireito(): Observable<ProcessoAreaDoDireito[]> {
    return this.http.get<ProcessoAreaDoDireito[]>(this.baseApiUrl + '/api/Sistema/ambito')
  }
}
