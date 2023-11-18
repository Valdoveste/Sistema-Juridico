import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoService } from 'src/app/services/processo.service';
import { DialogViewStatusProcessComponent } from './dialog-view-status-process/dialog-view-status-process.component';
import { DialogChangeStatusProcessComponent } from './dialog-change-status-process/dialog-change-status-process.component';

@Component({
  selector: 'app-process-area',
  templateUrl: './process-area.component.html',
  styleUrls: ['./process-area.component.scss']
})

export class ProcessAreaComponent {
  constructor(
    protected route: ActivatedRoute,
    public dialog: MatDialog,
    protected processoService: ProcessoService,
  ) { }

  ID_PROCESSO!: string | String;
  STATUS!: string | String;
  MOTIVO_ENCERRAMENTO!: string | String;
  MOTIVO_BAIXA_PROVISORIA!: string | String;

  IdProcesso = this.route.paramMap
    .subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.ID_PROCESSO = id;
        }

        this.processoService.getProcess(this.ID_PROCESSO)
          .subscribe({
            next: (response) => {
              this.STATUS = response.STATUS;
              if (response.STATUS == 'Encerrado' || response.STATUS == 'Baixa Provisória') {
                this.MOTIVO_BAIXA_PROVISORIA = response.MOTIVO_BAIXA_PROVISORIA;
                this.MOTIVO_ENCERRAMENTO = response.MOTIVO_ENCERRAMENTO;
              }
            }
          })
      }
    })

  componentName: string = '';

  swapTabs(componentName: string): void {
    this.componentName = componentName;
  }

  openDialogChangeStatus(enterAnimationDuration: string, exitAnimationDuration: string, status: string | String, id_processo: string | String): void {
    const dialogRefAdd = this.dialog.open(DialogChangeStatusProcessComponent, {
      width: '750px',
      data: { status: status, id_processo: id_processo },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogViewStatus(enterAnimationDuration: string, exitAnimationDuration: string, status: string | String, id_processo: string | String): void {
    const dialogRefAdd = this.dialog.open(DialogViewStatusProcessComponent, {
      width: '750px',
      data: { status: status, id_processo: id_processo },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
