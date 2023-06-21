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

  constructor(
    private Fase: FaseService,
    private Status: StatusService,
    private AreaDoDireito: AreaDoDireitoService,
    private TipoDeAcao: TipoDeAcaoService,
    private PatronoResponsavel: PatronoResponsavelService
  ) { }


  ngOnInit(): void {

    this.Status.getAllStatus()
      .subscribe({
        next: (status: any) => {
          this.status = status;
          console.log(status)
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.Fase.getAllFase()
      .subscribe({
        next: (fases: any) => {
          this.fases = fases;
          console.log(fases)
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.AreaDoDireito.getAllAreaDoDireito()
      .subscribe({
        next: (areasDoDireito: any) => {
          this.areasDoDireito = areasDoDireito;
          console.log(areasDoDireito)
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.TipoDeAcao.getAllTipoDeAcao()
      .subscribe({
        next: (tiposDeAcoes: any) => {
          this.tiposDeAcoes = tiposDeAcoes;
          console.log(tiposDeAcoes)
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.PatronoResponsavel.getAllPatronoResponsavel()
      .subscribe({
        next: (patronoResponsavel: any) => {
          this.patronoResponsavel = patronoResponsavel;
          console.log(patronoResponsavel)
        },
        error: (response: any) => {
          console.log(response)
        }
      })
  }
}
