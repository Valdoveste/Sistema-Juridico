import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Processo } from '../models/PROCESSO.model';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProcessoService {

  URL_API: string = environment.URL_API;

  constructor(private http: HttpClient) { }

  private _processo = new Subject<Processo[]>;
  processoResponse$ = this._processo.asObservable();

  getAllProcess() {
    this.http.get<Processo[]>(this.URL_API + '/api/Sistema/processo')
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
    return this.http.get<Processo>(this.URL_API + '/api/Sistema/processo/' + id)
  }

  createProcess(createProcessResquest: Processo): Observable<Processo> {
    return this.http.post<Processo>(this.URL_API + '/api/Sistema/add-processo', createProcessResquest)
  }

  updateProcess(id_process: String, updateProcessRequest: Processo): Observable<Processo> {
    return this.http.put<Processo>(this.URL_API + '/api/Sistema/update-processo/' + id_process, updateProcessRequest)
  }

  updateProcessEncerramento(id_process: String, motivoEncerramento: string | String): Observable<Processo> {

    const requestEncerramentoBody = {
      MOTIVO_ENCERRAMENTO: motivoEncerramento
    };

    return this.http.put<Processo>(this.URL_API + '/api/Sistema/update-encerramento/processo/' + id_process,
      requestEncerramentoBody,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
  }


  updateProcessBaixaProvisoria(id_process: String, motivoBaixaProvisoria: string | String): Observable<Processo> {

    const requestBaixaProvisoriaBody = {
      MOTIVO_BAIXA_PROVISORIA: motivoBaixaProvisoria
    };

    return this.http.put<Processo>(this.URL_API + '/api/Sistema/update-baixa-provisoria/processo/' + id_process,
      requestBaixaProvisoriaBody,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      })
  }

}
