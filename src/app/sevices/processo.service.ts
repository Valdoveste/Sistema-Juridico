import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Processo } from '../models/PROCESSO.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  baseApiUrl: string= environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllProcess(): Observable<Processo[]> {
   return this.http.get<Processo[]>(this.baseApiUrl + '/api/Sistema')
  }
}
