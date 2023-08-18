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
    ESTADO: '',
    CIDADE: '',
    PAIS: '',
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
    MOTIVO_BAIXA_PROVISORIA: ''
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
