import { Component, OnInit } from '@angular/core';
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

  constructor(private ProcessoService: ProcessoService, private router: Router) { }


  createProcessResquest: Processo = {
    ID_PROCESSO: '',
    NUMERO_PROCESSO: '',
    STATUS: '',
    TIPO_DE_ACAO: '',
    AREA_DO_DIREITO: '',
    EMPRESA: '',
    EMPRESA_CNPJ: '',
    AMBITO: '',
    PROCESSO_ESTADO: '',
    PROCESSO_CIDADE: '',
    PROCESSO_PAIS: '',
    VARA: '',
    FORO_TRIBUNAL_ORGAO: '',
    FASE: '',
    DATA_DISTRIBUICAO: new Date,
    DATA_CITACAO: new Date,
    PATRONO_RESPONSAVEL: '',
    PATRONOS_ANTERIORES: '',
    TEXTO_DO_OBJETO: '',
    VALOR_DO_PEDIDO: 0,
    VALOR_INSTANCIA1: 0,
    VALOR_INSTANCIA2: 0,
    VALOR_INSTANCIA3: 0,
    VALOR_INSTANCIA_EXTRAORDINARIA: 0,
    DATA_CADASTRO_PROCESSO: new Date,
    DATA_ULTIMO_ANDAMENTO: new Date,
    DATA_ENCERRAMENTO: new Date,
    MOTIVO_ENCERRAMENTO: '',
    MOTIVO_BAIXA_PROVISORIA: '',
    PARTE_CONTRARIA_NOME: '',
    PARTE_CONTRARIA_NOME_FANTASIA: '',
    PARTE_CONTRARIA_CPF: '',
    PARTE_CONTRARIA_CNPJ: '',
    PARTE_CONTRARIA_RG: '',
    PARTE_CONTRARIA_ENDERECO: '',
    PARTE_CONTRARIA_CEP: '',
    PARTE_CONTRARIA_NUMERO: 0,
    PARTE_CONTRARIA_COMPLEMENTO: '',
    PARTE_CONTRARIA_ESTADO: '',
    PARTE_CONTRARIA_CIDADE: '',
    PARTE_CONTRARIA_PAIS: '',
    PARTE_CONTRARIA_OBSERVACAO: '',
    PARTE_CONTRARIA_CARGO: '',
    PARTE_CONTRARIA_DATA_ADMISSAO: new Date,
    PARTE_CONTRARIA_DATA_DEMISSAO: new Date,
    PARTE_CONTRARIA_ULTIMO_SALARIO: 0
  }

  // createOpposingpartyResquest: ParteContraria = {
  //   ID_PARTECONTRARIA: '',
  //   PF_PJ: 0,
  //   NOME: '',
  //   NOME_FANTASIA: '',
  //   CPF: '',
  //   CNPJ: '',
  //   RG: '',
  //   ENDERECO: '',
  //   CEP: '',
  //   NUMERO: '',
  //   COMPLEMENTO: '',
  //   ESTADO: '',
  //   CIDADE: '',
  //   PAIS: '',
  //   OBSERVACAO: '',
  //   CARGO: '',
  //   DATA_ADMISSAO: '',
  //   DATA_DEMISSAO: '',
  //   ULTIMO_SALARIO: 0,
  // }

  ngOnInit(): void {
    this.createProcessForm = new FormGroup({
      // ID_PROCESSO: new FormControl(''),
      NUMERO_PROCESSO: new FormControl('', [Validators.required]),
      EMPRESA: new FormControl('', [Validators.required]),
      EMPRESA_CNPJ: new FormControl('', [Validators.required]),
      STATUS: new FormControl('', [Validators.required]),
      TIPO_DE_ACAO: new FormControl('', [Validators.required]),
      AREA_DO_DIREITO: new FormControl('', [Validators.required]),
      AMBITO: new FormControl('', [Validators.required]),
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
      DATA_CADASTRO_PROCESSO: new FormControl(''),
      DATA_ULTIMO_ANDAMENTO: new FormControl(''),
      DATA_ENCERRAMENTO: new FormControl(''),
      MOTIVO_ENCERRAMENTO: new FormControl(''),
      MOTIVO_BAIXA_PROVISORIA: new FormControl(''),
      PARTE_CONTRARIA_NOME: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_NOME_FANTASIA: new FormControl(''),
      PARTE_CONTRARIA_CPF: new FormControl(''),
      PARTE_CONTRARIA_CNPJ: new FormControl(''),
      PARTE_CONTRARIA_RG: new FormControl(''),
      PARTE_CONTRARIA_ENDERECO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_CEP: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_NUMERO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_COMPLEMENTO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_ESTADO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_PAIS: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_OBSERVACAO: new FormControl(''),
      PARTE_CONTRARIA_CIDADE: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_CARGO: new FormControl(''),
      PARTE_CONTRARIA_DATA_ADMISSAO: new FormControl(''),
      PARTE_CONTRARIA_DATA_DEMISSAO: new FormControl(''),
      PARTE_CONTRARIA_ULTIMO_SALARIO: new FormControl('')
    });
  }

  // get STATUS() {
  //   return this.createProcessForm.get('STATUS')!;
  // }

  // get NOME_FANTASIA() {
  //   return this.createProcessForm.get('NOME_FANTASIA')!;
  // }

  createProcess() {
    console.log(this.createProcessForm.errors)
    if (this.createProcessForm.valid) {
      console.log("Valido")
      this.ProcessoService.createProcess(this.createProcessResquest)
        .subscribe({
          next: (process) => {
            this.router.navigate(['painel-processos'])
          },
          error: (processError) => {
            console.log(processError)
          }
        });
    } else {
      console.log("Nao Valido")

    }

    return;
  }
}
