import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoAmbito } from '../models/PROCESSO_AMBITO.model';

@Injectable({
  providedIn: 'root'
})
export class AmbitoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAmbito(): Observable<ProcessoAmbito[]> {
    return this.http.get<ProcessoAmbito[]>(this.baseApiUrl + '/api/Sistema/ambito')
  }

  createAmbito(createAmbitoRequest: ProcessoAmbito): Observable<ProcessoAmbito> {
    delete createAmbitoRequest.ID;  
    return this.http.post<ProcessoAmbito>(this.baseApiUrl + '/api/Sistema/add-ambito', createAmbitoRequest);
  }
}
