import { HttpClient, HttpErrorResponse, HttpParams, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Processo } from '../models/PROCESSO.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchProcessoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  private _resultSearch = new Subject<Processo[]>;
  resultSearchResponse$ = this._resultSearch.asObservable();

  searchProcesso(queryParams: any) {
    this.http.get<Processo[]>(this.baseApiUrl + '/api/Sistema/painel-processos/busca-avancada', queryParams)
      .subscribe({
        next: (response: any) => {
          return this._resultSearch.next(response)
        },
        error: (err: HttpErrorResponse) => {
          return err;
        }
      })
  }
}
