import { Component, OnInit } from '@angular/core';
import { ProcessAreaComponent } from '../process-area.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Processo } from '../../../../models/PROCESSO.model';

@Component({
  selector: 'app-process-area-details',
  templateUrl: './process-area-details.component.html',
  styleUrls: ['./process-area-details.component.scss']
})
export class ProcessAreaDetailsComponent extends ProcessAreaComponent implements OnInit {

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
              next: (response: Processo) => {
                this.processoDetalhes = response;

                if (response.STATUS == 'Encerrado' || response.STATUS == 'Baixa Provisória') {
                  this.openDialogViewStatus('250ms', '100ms', response.STATUS, response.ID_PROCESSO!)
                }
              },
              error: (err: HttpErrorResponse) => console.log(err)
            });
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
}