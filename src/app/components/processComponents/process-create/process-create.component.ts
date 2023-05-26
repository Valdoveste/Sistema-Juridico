import { Component, OnInit } from '@angular/core';
import { ParteContraria } from 'src/app/models/PARTE_CONTRARIA.model';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoService } from '../../../sevices/processo.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-process-create',
  templateUrl: './process-create.component.html',
  styleUrls: ['./process-create.component.scss']
})
export class ProcessCreateComponent implements OnInit {
  createProcessForm!: FormGroup;

  createProcessResquest: Processo = {
    ID_PROCESSO: '',
    NUMERO_PROCESSO: '',
    STATUS: '',
    TIPO_DE_ACAO: '',
    AREA_DO_DIREITO: '',
    EMPPRESA: '',
    EMPRESA_CNPJ: '',
    AMBITO: '',
    PARTE_CONTRARIA: '',
    PARTE_CONTRARIA_CNPJ: '',
    PROCESSO_ESTADO: '',
    PROCESSO_CIDADE: '',
    PROCESSO_PAIS: '',
    VARA: '',
    FORO_TRIBUNAL_ORGAO: '',
    FASE: '',
    DATA_DISTRIBUICAO: '',
    DATA_CITACAO: '',
    PATRONO_RESPONSAVEL: '',
    PATRONOS_ANTERIORES: '',
    TEXTO_DO_OBJETO: '',
    VALOR_DO_PEDIDO: '',
    VALOR_INSTANCIA1: 0,
    VALOR_INSTANCIA2: 0,
    VALOR_INSTANCIA3: 0,
    VALOR_INSTANCIA_EXTRAORDINARIA: 0,
    DATA_CADASTRO_PROCESSO: '',
    DATA_ULITMO_PROCESSO: '',
    DATA_ULTIMO_ANDAMENTO: '',
    DATA_ENCERRAMENTO: '',
    MOTIVO_ENCERRAMENTO: '',
    MOTIVO_BAIXA_PROVISORIA: ''
  }

  createOpposingpartyResquest: ParteContraria = {
    ID_PARTECONTRARIA: '',
    PF_PJ: 0,
    NOME: '',
    NOME_FANTASIA: '',
    CPF: '',
    CNPJ: '',
    RG: '',
    ENDERECO: '',
    CEP: '',
    NUMERO: '',
    COMPLEMENTO: '',
    ESTADO: '',
    CIDADE: '',
    PAIS: '',
    OBSERVACAO: '',
    CARGO: '',
    DATA_ADMISSAO: '',
    DATA_DEMISSAO: '',
    ULTIMO_SALARIO: 0,
  }

  constructor(private ProcessoService: ProcessoService, private router: Router) { }

  ngOnInit(): void {
    this.createProcessForm = new FormGroup({
      ID_PROCESSO: new FormControl(''),
      NUMERO_PROCESSO: new FormControl('', [Validators.required]),
      STATUS: new FormControl('', [Validators.required]),
      TIPO_DE_ACAO: new FormControl('', [Validators.required]),
      AREA_DO_DIREITO: new FormControl('', [Validators.required]),
      EMPPRESA: new FormControl('', [Validators.required]),
      EMPRESA_CNPJ: new FormControl('', [Validators.required]),
      AMBITO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_CNPJ: new FormControl('', [Validators.required]),
      PROCESSO_ESTADO: new FormControl('', [Validators.required]),
      PROCESSO_CIDADE: new FormControl('', [Validators.required]),
      PROCESSO_PAIS: new FormControl('', [Validators.required]),
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
      DATA_CADASTRO_PROCESSO: new FormControl('', [Validators.required]),
      DATA_ULITMO_PROCESSO: new FormControl('', [Validators.required]),
      DATA_ULTIMO_ANDAMENTO: new FormControl('', [Validators.required]),
      DATA_ENCERRAMENTO: new FormControl('', [Validators.required]),
      MOTIVO_ENCERRAMENTO: new FormControl('', [Validators.required]),
      MOTIVO_BAIXA_PROVISORIA: new FormControl('', [Validators.required]),
      PF_PJ: new FormControl('', [Validators.required]),
      NOME: new FormControl('', [Validators.required]),
      NOME_FANTASIA: new FormControl('', [Validators.required]),
      CPF: new FormControl('', [Validators.required]),
      CNPJ: new FormControl('', [Validators.required]),
      RG: new FormControl('', [Validators.required]),
      ENDERECO: new FormControl('', [Validators.required]),
      CEP: new FormControl('', [Validators.required]),
      NUMERO: new FormControl('', [Validators.required]),
      COMPLEMENTO: new FormControl('', [Validators.required]),
      ESTADO: new FormControl('', [Validators.required]),
      PAIS: new FormControl('', [Validators.required]),
      OBSERVACAO: new FormControl('', [Validators.required]),
      CARGO: new FormControl('', [Validators.required]),
      DATA_ADMISSAO: new FormControl('', [Validators.required]),
      DATA_DEMISSAO: new FormControl('', [Validators.required]),
      ULTIMO_SALARIO: new FormControl('', [Validators.required]),
    });
  }

  get STATUS() {
    return this.createProcessForm.get('STATUS')!;
  }

  createProcess() {
    if (this.createProcessForm.valid) {
      this.ProcessoService.createProcess(this.createProcessResquest)
        .subscribe({
          next: (process) => {
            this.router.navigate(['painel-processos'])
          }
        });
    }

    return;
  }
}
