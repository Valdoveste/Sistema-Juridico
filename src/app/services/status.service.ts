import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'env';
import { Observable } from 'rxjs';
import { ProcessoStatus } from '../models/PROCESSO_STATUS.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  getAllStatus(): Observable<ProcessoStatus[]> {
    return this.http.get<ProcessoStatus[]>(this.URL_API + '/api/Sistema/status')
  }
}
