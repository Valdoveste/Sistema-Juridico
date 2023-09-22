import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Processo } from '../models/PROCESSO.model';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProcessoService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  private _processo = new Subject<Processo[]>;
  processoResponse$ = this._processo.asObservable();

  getAllProcess() {
    this.http.get<Processo[]>(this.baseApiUrl + '/api/Sistema/processo')
      .subscribe({
        next: (response) => {
          return this._processo.next(response)
        },
        error: (err: HttpErrorResponse) => {
          return err;
        }
      })
  }

  getProcess(id: String): Observable<Processo> {
    return this.http.get<Processo>(this.baseApiUrl + '/api/Sistema/processo/' + id)
  }

  createProcess(createProcessResquest: Processo): Observable<Processo> {
    return this.http.post<Processo>(this.baseApiUrl + '/api/Sistema/add-processo', createProcessResquest)
  }

  updateProcess(id_process: String, updateProcessRequest: Processo): Observable<Processo> {
    return this.http.put<Processo>(this.baseApiUrl + '/api/Sistema/update-processo/' + id_process, updateProcessRequest)
  }
}
