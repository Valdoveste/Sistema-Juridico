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
import { Processo } from 'src/app/models/PROCESSO.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchProcessoService } from 'src/app/services/search-processo.service';
import { ProcessoService } from 'src/app/services/processo.service';
import { HttpErrorResponse } from '@angular/common/http';

export interface SearchQueryParameters {
  numero_processo: string;
  fase: string;
  area_do_direito: string;
  patrono_responsavel: string;
  status: string;
  tipo_de_acao: string;
  parte_contraria: string;
}

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
  processo: Processo[] = [];

  searchQueryParameters: SearchQueryParameters = {
    numero_processo: '',
    fase: '',
    area_do_direito: '',
    patrono_responsavel: '',
    status: '',
    tipo_de_acao: '',
    parte_contraria: ''
  }

  constructor(
    private router: Router,
    private Fase: FaseService,
    private Status: StatusService,
    private AreaDoDireito: AreaDoDireitoService,
    private TipoDeAcao: TipoDeAcaoService,
    private PatronoResponsavel: PatronoResponsavelService,
    private activedRoute: ActivatedRoute,
    private searchProcessoService: SearchProcessoService,
    private processoService: ProcessoService
  ) { }

  areAllAttributesEmpty(searchInterface: SearchQueryParameters): boolean {
    return Object.values(searchInterface).every(value => value === '')
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
        next: (status: ProcessoStatus[]) => {
          this.status = status;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.Fase.getAllFase()
      .subscribe({
        next: (fases: ProcessoFase[]) => {
          this.fases = fases;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.AreaDoDireito.getAllAreaDoDireito()
      .subscribe({
        next: (areasDoDireito: ProcessoAreaDoDireito[]) => {
          this.areasDoDireito = areasDoDireito;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.TipoDeAcao.getAllTipoDeAcao()
      .subscribe({
        next: (tiposDeAcoes: ProcessoTipoDeAcao[]) => {
          this.tiposDeAcoes = tiposDeAcoes;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.PatronoResponsavel.getAllPatronoResponsavel()
      .subscribe({
        next: (patronoResponsavel: ProcessoPatronoResponsavel[]) => {
          this.patronoResponsavel = patronoResponsavel;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }
}
