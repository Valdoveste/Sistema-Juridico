import { Component, OnInit } from '@angular/core';
import { ProcessoAreaDoDireito } from 'src/app/models/PROCESSO_AREA_DO_DIREITO.model';
import { ProcessoFase } from 'src/app/models/PROCESSO_FASE.model';
import { ProcessoPatronoResponsavel } from 'src/app/models/PROCESSO_PATRONO_RESPONSAVEL.model';
import { ProcessoStatus } from 'src/app/models/PROCESSO_STATUS.model';
import { ProcessoTipoDeAcao } from 'src/app/models/PROCESSO_TIPO_DE_ACAO.model';
import { AreaDoDireitoService } from 'src/app/services/area-do-direito.service';
import { FaseService } from 'src/app/services/fase.service';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';
import { StatusService } from 'src/app/services/status.service';
import { TipoDeAcaoService } from 'src/app/services/tipo-de-acao.service';

@Component({
  selector: 'app-process-searchbar',
  templateUrl: './process-searchbar.component.html',
  styleUrls: ['./process-searchbar.component.scss']
})

export class ProcessSearchbarComponent implements OnInit {
  status: ProcessoStatus[] = [];
  fases: ProcessoFase[] = [];
  areasDoDireito: ProcessoAreaDoDireito[] = [];
  tiposDeAcoes: ProcessoTipoDeAcao[] = [];
  patronoResponsavel: ProcessoPatronoResponsavel[] = [];
  searchQueryParameters = {
    numero_processo: '',
    fase: '',
    area_do_direito: '',
    patrono_responsavel: '',
    status: '',
    tipo_de_acao: '',
    parte_contraria: ''
  }

  constructor(
    private Fase: FaseService,
    private Status: StatusService,
    private AreaDoDireito: AreaDoDireitoService,
    private TipoDeAcao: TipoDeAcaoService,
  areAllAttributesEmpty(obj: any): boolean {
    return Object.values(this.searchQueryParameters).every(value => value === '')
  }

  search() {
    this.router.navigate(['/painel-processos/busca-avancada'], { queryParams: this.searchQueryParameters })

    if (this.areAllAttributesEmpty(this.searchQueryParameters))
      this.processoService.getAllProcess()
    else
      this.activedRoute.queryParamMap
        .subscribe({
          next: (params) => this.searchProcessoService.searchProcesso(params)
        })
  }

  ngOnInit(): void {

    this.Status.getAllStatus()
      .subscribe({
        next: (status: any) => {
          this.status = status;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.Fase.getAllFase()
      .subscribe({
        next: (fases: any) => {
          this.fases = fases;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.AreaDoDireito.getAllAreaDoDireito()
      .subscribe({
        next: (areasDoDireito: any) => {
          this.areasDoDireito = areasDoDireito;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.TipoDeAcao.getAllTipoDeAcao()
      .subscribe({
        next: (tiposDeAcoes: any) => {
          this.tiposDeAcoes = tiposDeAcoes;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.PatronoResponsavel.getAllPatronoResponsavel()
      .subscribe({
        next: (patronoResponsavel: any) => {
          this.patronoResponsavel = patronoResponsavel;
        },
        error: (response: any) => {
          console.log(response)
        }
      })
  }
}
