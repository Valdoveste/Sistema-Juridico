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
    return this.http.get<ProcessoStatus[]>(this.URL_API + '/api/Status/status')
  }

  // createStatus(createStatusRequest: ProcessoStatus): Observable<ProcessoStatus> {
  //   delete createStatusRequest.ID;
  //   return this.http.post<ProcessoStatus>(this.URL_API + '/api/Status/add-status', createStatusRequest);
  // }

  // updateStatus(id: String, updateStatusRequest: ProcessoStatus): Observable<ProcessoStatus> {
  //   updateStatusRequest.ID = id;
  //   return this.http.put<ProcessoStatus>(this.URL_API + '/api/Status/update-status/' + id, updateStatusRequest)

  // }

  // deleteStatus(id: String): Observable<ProcessoStatus> {
  //   return this.http.delete<ProcessoStatus>(this.URL_API + '/api/Status/delete-status/' + id)
  // }
}
