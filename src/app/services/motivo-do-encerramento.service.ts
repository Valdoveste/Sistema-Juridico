import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoMotivoDoEncerramento } from '../models/PROCESSO_MOTIVO_DO_ENCERRAMENTO.model';

@Injectable({
  providedIn: 'root'
})
export class MotivoDoEncerramentoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllMotivoDoEncerramento(): Observable<ProcessoMotivoDoEncerramento[]> {
    return this.http.get<ProcessoMotivoDoEncerramento[]>(this.baseApiUrl + '/api/Sistema/ambito')
  }
}
