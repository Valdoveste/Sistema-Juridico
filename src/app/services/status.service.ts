import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { ProcessoStatus } from '../models/PROCESSO_STATUS.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllStatus(): Observable<ProcessoStatus[]> {
    return this.http.get<ProcessoStatus[]>(this.baseApiUrl + '/api/Sistema/status')
  }
}
