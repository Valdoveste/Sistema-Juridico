import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoTipoDeAcao } from '../models/PROCESSO_TIPO_DE_ACAO.model';

@Injectable({
  providedIn: 'root'
})
export class TipoDeAcaoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllTipoDeAcao(): Observable<ProcessoTipoDeAcao[]> {
    return this.http.get<ProcessoTipoDeAcao[]>(this.baseApiUrl + '/api/Sistema/ambito')
  }
}
