import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoService } from 'src/app/services/processo.service';

@Component({
  selector: 'app-process-area',
  templateUrl: './process-area.component.html',
  styleUrls: ['./process-area.component.scss']
})
export class ProcessAreaComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private processoService: ProcessoService
  ) { }

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
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.processoService.getProcess(id)
            .subscribe({
              next: (response) => {
                this.processoDetalhes = response;
              }
            }
            )
        }
      }
    })
  }

}
