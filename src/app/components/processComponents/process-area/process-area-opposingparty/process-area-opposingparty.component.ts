import { Component, OnInit } from '@angular/core';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-process-area-opposingparty',
  templateUrl: './process-area-opposingparty.component.html',
  styleUrls: ['./process-area-opposingparty.component.scss']
})
export class ProcessAreaOpposingpartyComponent implements OnInit {

  constructor(
    private ParteContrariaService: ParteContrariaService,
    private route: ActivatedRoute,
  ) { }

  idProcesso: any;

  componentName: number = 0;

  swapTabs(componentName: number): void {
    this.componentName = componentName;
  }

  viewParteContriaRequest: ProcessoParteContraria = {
    ID: '',
    ID_PROCESSO: '',
    PF_PJ: 0,
    NOME: '',
    NOME_FANTASIA: '',
    CPF: '',
    CNPJ: '',
    RG: '',
    ENDERECO: '',
    CEP: '',
    NUMERO: 0,
    COMPLEMENTO: '',
    ESTADO: '',
    PAIS: '',
    CIDADE: '',
    OBSERVACAO: '',
    CARGO: '',
    DATA_ADMISSAO: '',
    DATA_DEMISSAO: '',
    ULTIMO_SALARIO: 0,
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.idProcesso = params.get('id');
        this.ParteContrariaService.getProcessoParteContraria(this.idProcesso)
          .subscribe({
            next: (response) => {
              this.viewParteContriaRequest = response;
              console.log(response)
              this.componentName = response.PF_PJ;
            },
            error: (response) => {
              console.log(response)
            }
          })
      }
    })

  }
}
