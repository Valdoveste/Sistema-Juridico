import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcessoLogAlteracoesService } from 'src/app/services/processo-log-alteracoes.service';
import { ProcessoLogAlteracoes } from 'src/app/models/PROCESSO_LOG_ALTERACOES.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoService } from 'src/app/services/processo.service';
import { ContentObserver } from '@angular/cdk/observers';
import { ConsoleLogger } from '@angular/compiler-cli';

@Component({
  selector: 'app-process-alterations-log',
  templateUrl: './process-alterations-log.component.html',
  styleUrls: ['./process-alterations-log.component.scss']
})
export class ProcessAlterationsLogComponent implements OnInit {
  constructor(
    private logAlteracoesService: ProcessoLogAlteracoesService,
    private ProcessoService: ProcessoService,
    private router: ActivatedRoute
  ) { }

  logProcessos: Array<ProcessoLogAlteracoes> = [];

  processo: Processo = {
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
    this.loadProcessLog();
  }

  loadProcessLog() {
    this.router.paramMap.subscribe({
      next: (params) => {
        const ID_PROCESSO = params.get('id');
        if (ID_PROCESSO) {
          this.logAlteracoesService.getLogProcesso(ID_PROCESSO).subscribe({
            next: (response: Array<ProcessoLogAlteracoes>) => {
              this.logProcessos = response;
              console.log(response)
            },
            error: (err: HttpErrorResponse) => console.log(err)
          });

          this.ProcessoService.getProcess(ID_PROCESSO).subscribe({
            next: (response) => {
              this.processo = response;
            },
            error: (err: HttpErrorResponse) => console.log(err)
          });
        }
      }
    });
  }

}
