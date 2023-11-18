import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Processo } from '../models/PROCESSO.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

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
