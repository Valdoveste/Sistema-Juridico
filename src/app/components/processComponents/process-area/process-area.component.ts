import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoService } from 'src/app/services/processo.service';
import { DialogFinishProcessComponent } from './dialog-finish-process/dialog-finish-process.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-process-area',
  templateUrl: './process-area.component.html',
  styleUrls: ['./process-area.component.scss']
})
export class ProcessAreaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private processoService: ProcessoService,
  ) { }

  ID_PROCESSO!: string | String;
  STATUS!: string | String;
  MOTIVO_ENCERRAMENTO!: string | String;
  MOTIVO_BAIXA_PROVISORIA!: string | String;
  componentName: string = '';

  swapTabs(componentName: string): void {
    this.componentName = componentName;
  }

  processoDetalhes: Processo = {
    ID_PROCESSO: '',
    NUMERO_PROCESSO: '',
    STATUS: '',
    TIPO_DE_ACAO: '',
    AREA_DO_DIREITO: '',
    EMPRESA: '',
    EMPRESA_CNPJ: '',
    AMBITO: '',
    ESTADO: '',
    CIDADE: '',
    PAIS: '',
    VARA: '',
    FORO_TRIBUNAL_ORGAO: '',
    FASE: '',
    DATA_DISTRIBUICAO: '',
    DATA_CITACAO: '',
    PARTE_CONTRARIA: '',
    PATRONO_RESPONSAVEL: '',
    PATRONOS_ANTERIORES: '',
    TEXTO_DO_OBJETO: '',
    VALOR_DO_PEDIDO: 0,
    VALOR_INSTANCIA1: 0,
    VALOR_INSTANCIA2: 0,
    VALOR_INSTANCIA3: 0,
    VALOR_INSTANCIA_EXTRAORDINARIA: 0,
    DATA_CADASTRO_PROCESSO: '',
    DATA_ULTIMO_ANDAMENTO: '',
    DATA_ENCERRAMENTO: '',
    MOTIVO_ENCERRAMENTO: '',
    MOTIVO_BAIXA_PROVISORIA: ''
  };

  ngOnInit(): void {
    this.loadProcess();
  }

  loadProcess() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.processoService.getProcess(id)
            .subscribe({
              next: (response) => {
                this.processoDetalhes = response;
              },
              error: (err: HttpErrorResponse) => console.log(err)
            });
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  openDialogCloseProcess(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogFinishProcessComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadProcess() : null; });
  }

}
