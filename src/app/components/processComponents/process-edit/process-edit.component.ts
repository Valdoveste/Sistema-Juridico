import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoService } from 'src/app/services/processo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProcessoPatronosAnteriors } from 'src/app/models/PROCESSO_PATRONOS_ANTERIORES.model';
import { PatronoAnteriorService } from 'src/app/services/patrono-anterior.service';
import { ProcessoLogAlteracoes } from 'src/app/models/PROCESSO_LOG_ALTERACOES.model';
import { ProcessoLogAlteracoesService } from 'src/app/services/processo-log-alteracoes.service';

@Component({
  selector: 'app-process-edit',
  templateUrl: './process-edit.component.html',
  styleUrls: ['./process-edit.component.scss']
})
export class ProcessEditComponent implements OnInit {
  componentName: string | String = '';

  swapTabs(componentName: string): void {
    this.componentName = componentName;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ProcessoService: ProcessoService,
    private PatronoAnteriorService: PatronoAnteriorService,
    private ProcessoLogAlteracoesService: ProcessoLogAlteracoesService
  ) { }

  updateProcessForm!: FormGroup;

  @Input() updateProcessRequest: Processo = {
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

  createPatronoAnteriorRequest: ProcessoPatronosAnteriors = {
    ID_PROCESSO: '',
    ID_USUARIO: '',
    NOME_USUARIO: '',
    PATRONO_RESPONSAVEL_ATUAL: '',
    PATRONO_RESPONSAVEL_CPF_CNPJ_ATUAL: '',
    DATA_ALTERACAO: ''
  }

  createLogProcessoRequest: ProcessoLogAlteracoes = {
    ID_PROCESSO: '',
    ID_USUARIO: '',
    NOME_USUARIO: '',
    VALOR_ORIGINAL: '',
    VALOR_ATUAL: '',
    DATA_ALTERACAO: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id_process = params.get('id');
        if (id_process) {
          this.ProcessoService.getProcess(id_process).subscribe({
            next: (response) => {
              this.updateProcessRequest = response;
            },
            error: (err: HttpErrorResponse) => console.log(err)
          });
        }
      }
    });

    this.updateProcessForm = new FormGroup({
      // ID_PROCESSO: new FormControl(''),
      // EMPRESA_CNPJ: new FormControl('', [Validators.required]),
      NUMERO_PROCESSO: new FormControl('', [Validators.required]),
      EMPRESA: new FormControl('', [Validators.required]),
      STATUS: new FormControl('', [Validators.required]),
      TIPO_DE_ACAO: new FormControl('', [Validators.required]),
      AREA_DO_DIREITO: new FormControl('', [Validators.required]),
      AMBITO: new FormControl('', [Validators.required]),
      ESTADO: new FormControl('', [Validators.required]),
      CIDADE: new FormControl('', [Validators.required]),
      PAIS: new FormControl('', [Validators.required]),
      VARA: new FormControl('', [Validators.required]),
      FORO_TRIBUNAL_ORGAO: new FormControl('', [Validators.required]),
      FASE: new FormControl('', [Validators.required]),
      DATA_DISTRIBUICAO: new FormControl('', [Validators.required]),
      DATA_CITACAO: new FormControl('', [Validators.required]),
      PATRONO_RESPONSAVEL: new FormControl('', [Validators.required]),
      PATRONOS_ANTERIORES: new FormControl('', [Validators.required]),
      TEXTO_DO_OBJETO: new FormControl('', [Validators.required]),
      VALOR_DO_PEDIDO: new FormControl('', [Validators.required]),
      VALOR_INSTANCIA1: new FormControl('', [Validators.required]),
      VALOR_INSTANCIA2: new FormControl('', [Validators.required]),
      VALOR_INSTANCIA3: new FormControl('', [Validators.required]),
      VALOR_INSTANCIA_EXTRAORDINARIA: new FormControl('', [Validators.required]),
      DATA_CADASTRO_PROCESSO: new FormControl(''),
      DATA_ULTIMO_ANDAMENTO: new FormControl(''),
      DATA_ENCERRAMENTO: new FormControl(''),
      MOTIVO_ENCERRAMENTO: new FormControl(''),
      MOTIVO_BAIXA_PROVISORIA: new FormControl('')
    });
  }

  updateProcess() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id_processo = params.get('id')
        if (id_processo) {
          this.ProcessoService.updateProcess(id_processo, this.updateProcessRequest)
            .subscribe({
              next: (response: any) => this.addLogAfterUpdateProcess(id_processo, response),

              error: (err: HttpErrorResponse) => console.log(err)
            });
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  addLogAfterUpdateProcess(id_processo: string, response: any) {
    for (let i = 0; i < response.length; i++) {
      for (const propertyName in response[i]) {
        if (response[i].hasOwnProperty(propertyName)) {
          this.createLogProcessoRequest.VALOR_ORIGINAL = response[i][propertyName]['VALOR_ORIGINAL'].toString();
          this.createLogProcessoRequest.VALOR_ATUAL = response[i][propertyName]['VALOR_ATUAL'].toString();

          this.ProcessoLogAlteracoesService.addLogProcesso(id_processo, this.createLogProcessoRequest)
            .subscribe({ error: (err: HttpErrorResponse) => console.log(err) });

          this.router.navigate(['/painel-processos', 'processo-detalhes', id_processo]);
        }
      }
    }
  }
}