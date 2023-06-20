import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoForoTribunalOrgao } from '../models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';

@Injectable({
  providedIn: 'root'
})
export class ForoTribunalOrgaoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllForoTribunalOrgao(): Observable<ProcessoForoTribunalOrgao[]> {
    return this.http.get<ProcessoForoTribunalOrgao[]>(this.baseApiUrl + '/api/Sistema/ambito')
  }
}
