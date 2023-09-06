import { Component, OnInit } from '@angular/core';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoService } from 'src/app/services/processo.service';

@Component({
  selector: 'app-process-container',
  templateUrl: './process-container.component.html',
  styleUrls: ['./process-container.component.scss']
})
export class ProcessContainerComponent implements OnInit {

  processos: Processo[] = [];

  constructor(
    private processoService: ProcessoService,
  ) { }

  ngOnInit(): void {
    this.processoService.getAllProcess()
      .subscribe({
        next: (response) => {
          this.processos = response.sort((a, b) => {
            const dateA = new Date(a.DATA_CADASTRO_PROCESSO);
            const dateB = new Date(b.DATA_CADASTRO_PROCESSO);

            return dateB.getTime() - dateA.getTime();
          });
        },
        error: (response) => {
          console.log(response)
        }
      })
  }

}
