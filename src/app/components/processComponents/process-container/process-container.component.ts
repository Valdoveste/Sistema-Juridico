import { delay } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoService } from '../../../services/processo.service';
import { SearchProcessoService } from '../../../services/search-processo.service';

@Component({
  selector: 'app-process-container',
  templateUrl: './process-container.component.html',
  styleUrls: ['./process-container.component.scss']
})
export class ProcessContainerComponent implements OnInit {

  processos: Processo[] = [];

  constructor(
    private processoService: ProcessoService,
    private searchProcesso: SearchProcessoService
  ) { }

  ngOnInit(): void {
    this.processoService.processoResponse$
      .pipe(
        delay(250)
      )
      .subscribe(
        response => {
          this.processos = [];
          this.processos = response
        }
      )

    this.searchProcesso.resultSearchResponse$
      .pipe(
        delay(250)
      )
      .subscribe(
        response => {
          this.processos = [];
          this.processos = response;
        }
      )
  }

}
