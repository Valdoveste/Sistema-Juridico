import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoMotivoDoEncerramento } from '../models/PROCESSO_MOTIVO_DO_ENCERRAMENTO.model';

@Injectable({
  providedIn: 'root'
})
export class MotivoDoEncerramentoService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllMotivoDoEncerramento(): Observable<ProcessoMotivoDoEncerramento[]> {
    return this.http.get<ProcessoMotivoDoEncerramento[]>(this.URL_API + '/api/Sistema/ambito')
  }
}
