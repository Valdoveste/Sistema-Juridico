import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoService } from 'src/app/services/processo.service';

@Component({
  selector: 'app-dialog-view-status-process',
  templateUrl: './dialog-view-status-process.component.html',
  styleUrls: ['./dialog-view-status-process.component.scss']
})
export class DialogViewStatusProcessComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public statusData: any,
    private ProcessoService: ProcessoService
  ) { }

  componentName!: string;

  swapTabs(componentName: string) {
    this.componentName = componentName;
  }

  updateProcessRequest: Processo = {
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
    ID_PARTE_CONTRARIA: '',
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
  }

  ngOnInit(): void {
    this.swapTabs(this.statusData.status);

    this.ProcessoService.getProcess(this.statusData.id_processo)
      .subscribe({
        next: (response) => {
          this.updateProcessRequest = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }
}
