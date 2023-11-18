import { Component, OnInit } from '@angular/core';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { ActivatedRoute } from '@angular/router';
import { ProcessoService } from 'src/app/services/processo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-process-area-opposingparty',
  templateUrl: './process-area-opposingparty.component.html',
  styleUrls: ['./process-area-opposingparty.component.scss']
})
export class ProcessAreaOpposingpartyComponent implements OnInit {

  constructor(
    private ParteContrariaService: ParteContrariaService,
    private route: ActivatedRoute,
    private ProcessoService: ProcessoService
  ) { }
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
    this.swapTabs(this.viewParteContriaRequest.PF_PJ);

    this.route.paramMap.subscribe({
      next: (params) => {
        const ID_PROCESSO = params.get('id');
        if (ID_PROCESSO)
          this.ProcessoService.getProcess(ID_PROCESSO!).subscribe({
            next: (response) => {
              this.loadParteContraria(response.ID_PARTE_CONTRARIA);
            },
            error: (err: HttpErrorResponse) => console.log(err)
          })
      }
    })

  }

  loadParteContraria(ID_PARTE_CONTRARIA: any) {
    this.ParteContrariaService.getProcessoParteContraria(ID_PARTE_CONTRARIA)
      .subscribe({
        next: (response) => {
          this.viewParteContriaRequest = response;
          this.componentName = response.PF_PJ;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }
}
