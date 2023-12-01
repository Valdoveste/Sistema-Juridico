import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Event, ParamMap, Router } from '@angular/router';
import { Processo } from '../../../models/PROCESSO.model';
import { ProcessoService } from '../../../services/processo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProcessoPatronosAnteriors } from '../../../models/PROCESSO_PATRONOS_ANTERIORES';
import { PatronoAnteriorService } from '../../../services/patrono-anterior.service';
import { ProcessoLogAlteracoes } from '../../../models/PROCESSO_LOG_ALTERACOES.model';
import { ProcessoLogAlteracoesService } from '../../../services/processo-log-alteracoes.service';
import { ProcessoAmbito } from '../../../models/PROCESSO_AMBITO.model';
import { ProcessoAreaDoDireito } from '../../../models/PROCESSO_AREA_DO_DIREITO.model';
import { ProcessoCondicoesTentativaAcordo } from '../../../models/PROCESSO_CONDICOES_TENTATIVA_ACORDO.model';
import { ProcessoEmpresas } from '../../../models/PROCESSO_EMPRESAS.model';
import { ProcessoFase } from '../../../models/PROCESSO_FASE.model';
import { ProcessoForoTribunalOrgao } from '../../../models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';
import { ProcessoMotivoDoEncerramento } from '../../../models/PROCESSO_MOTIVO_DO_ENCERRAMENTO.model';
import { ProcessoPatronoResponsavel } from '../../../models/PROCESSO_PATRONO_RESPONSAVEL.model';
import { ProcessoStatus } from '../../../models/PROCESSO_STATUS.model';
import { ProcessoTipoDeAcao } from '../../../models/PROCESSO_TIPO_DE_ACAO.model';
import { ProcessoVara } from '../../../models/PROCESSO_VARA.model';
import { AreaDoDireitoService } from '../../../services/area-do-direito.service';
import { FaseService } from '../../../services/fase.service';
import { ForoTribunalOrgaoService } from '../../../services/foro-tribunal-orgao.service';
import { PatronoResponsavelService } from '../../../services/patrono-responsavel.service';
import { StatusService } from '../../../services/status.service';
import { TipoDeAcaoService } from '../../../services/tipo-de-acao.service';
import { VaraService } from '../../../services/vara.service';
import { AmbitoService } from '../../../services/ambito.service';
import { EmpresasService } from '../../../services/empresas.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangeStatusProcessComponent } from '../process-area/dialog-change-status-process/dialog-change-status-process.component';

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
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private ProcessoService: ProcessoService,
    private PatronoAnteriorService: PatronoAnteriorService,
    private ProcessoLogAlteracoesService: ProcessoLogAlteracoesService,
    private AmbitoService: AmbitoService,
    private AreaDoDireito: AreaDoDireitoService,
    private Fase: FaseService,
    private ForoTribunalOrgao: ForoTribunalOrgaoService,
    private Status: StatusService,
    private TipoDeAcao: TipoDeAcaoService,
    private Vara: VaraService,
    private PatronoResponsavel: PatronoResponsavelService,
    private EmpresasService: EmpresasService
  ) { }

  ambitos: ProcessoAmbito[] = [];
  areasDoDireito: ProcessoAreaDoDireito[] = [];
  condicoesTentativaAcordo: ProcessoCondicoesTentativaAcordo[] = [];
  fases: ProcessoFase[] = [];
  foroTribunalOrgaos: ProcessoForoTribunalOrgao[] = [];
  motivosDoEncerramento: ProcessoMotivoDoEncerramento[] = [];
  status: ProcessoStatus[] = [];
  tiposDeAcoes: ProcessoTipoDeAcao[] = [];
  varas: ProcessoVara[] = [];
  patronoResponsaveis: ProcessoPatronoResponsavel[] = [];
  empresas: ProcessoEmpresas[] = [];

  updateProcessForm!: FormGroup;

  updateProcessRequest: Processo = {
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
    PARTE_CONTRARIA: '',
    ID_PARTE_CONTRARIA: '',
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
    PATRONO_RESPONSAVEL_ANTERIOR: '',
    DATA_ALTERACAO: ''
  }

  createLogProcessoRequest: ProcessoLogAlteracoes = {
    ID_PROCESSO: '',
    ID_USUARIO: '',
    NOME_USUARIO: '',
    VALOR_ORIGINAL: '',
    VALOR_ATUAL: '',
    INPUT_ALTERADO: '',
    DATA_ALTERACAO: ''
  }

  ngOnInit(): void {
    this.AmbitoService.getAllAmbito()
      .subscribe({
        next: (ambitos: ProcessoAmbito[]) => {
          this.ambitos = ambitos;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.EmpresasService.getAllEmpresas()
      .subscribe({
        next: (response: ProcessoEmpresas[]) => {
          this.empresas = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })


    this.AreaDoDireito.getAllAreaDoDireito()
      .subscribe({
        next: (response: ProcessoAreaDoDireito[]) => {
          this.areasDoDireito = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.Fase.getAllFase()
      .subscribe({
        next: (response: ProcessoFase[]) => {
          this.fases = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.ForoTribunalOrgao.getAllForoTribunalOrgao()
      .subscribe({
        next: (response: ProcessoForoTribunalOrgao[]) => {
          this.foroTribunalOrgaos = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.Status.getAllStatus()
      .subscribe({
        next: (response: ProcessoStatus[]) => {
          this.status = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.TipoDeAcao.getAllTipoDeAcao()
      .subscribe({
        next: (response: ProcessoTipoDeAcao[]) => {
          this.tiposDeAcoes = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.Vara.getAllVara()
      .subscribe({
        next: (response: ProcessoVara[]) => {
          this.varas = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.PatronoResponsavel.getAllPatronoResponsavel()
      .subscribe({
        next: (response: ProcessoPatronoResponsavel[]) => {
          this.patronoResponsaveis = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.route.paramMap.subscribe({
      next: (params) => {
        const id_process = params.get('id');
        if (id_process) {
          this.ProcessoService.getProcess(id_process)
            .subscribe({
              next: (response: Processo) => {
                this.updateProcessRequest = response;
              },
              error: (err: HttpErrorResponse) => console.log(err)
            });
        }
      }
    });

    this.updateProcessForm = new FormGroup({
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

  statusCheck(status: Event | String) {
    if (status == 'Encerrado' || status == 'Baixa Provisória') {
      this.openDialogChangeStatus('250ms', '100ms', status, this.updateProcessRequest.ID_PROCESSO!)
    }
  }

  updateProcess() {
    this.route.paramMap.subscribe({
      next: (params: ParamMap) => {
        const id_processo: string | null = params.get('id')
        if (id_processo) {
          this.ProcessoService.updateProcess(id_processo, this.updateProcessRequest)
            .subscribe({
              next: (response: any) => {
                this.addLogAfterUpdateProcess(id_processo, response.processModifiedInformation);
                this.addPatronoResponsavelOld(id_processo, response.processModifiedInformation);
              },
              error: (err: HttpErrorResponse) => { console.log(err) }
            });
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }

  addLogAfterUpdateProcess(id_processo: string, responses: any) {
    for (const responseItem of responses) {
      for (const propertyName in responseItem) {
        if (responseItem.hasOwnProperty(propertyName)) {
          this.createLogProcessoRequest.VALOR_ORIGINAL = responseItem[propertyName]['VALOR_ORIGINAL'].toString();
          this.createLogProcessoRequest.VALOR_ATUAL = responseItem[propertyName]['VALOR_ATUAL'].toString();
          this.createLogProcessoRequest.INPUT_ALTERADO = propertyName;

          this.ProcessoLogAlteracoesService.addLogProcesso(id_processo, this.createLogProcessoRequest)
            .subscribe({ error: (err: HttpErrorResponse) => console.log(err) });
        }
      }
    }

    this.router.navigate(['/painel-processos', 'processo-detalhes', id_processo]);
  }

  addPatronoResponsavelOld(id_processo: string, responses: any) {
    this.createPatronoAnteriorRequest.ID_PROCESSO = id_processo;

    for (const resonseItem of responses) {
      if (resonseItem['PATRONO_RESPONSAVEL']) {
        this.createPatronoAnteriorRequest.PATRONO_RESPONSAVEL_ANTERIOR = resonseItem['PATRONO_RESPONSAVEL']['VALOR_ORIGINAL'].toString();

        this.PatronoAnteriorService.addPatronoAnterior(this.createPatronoAnteriorRequest)
          .subscribe({
            error: (err: HttpErrorResponse) => console.log(err)
          })
        break;
      }
    }
  }

  openDialogChangeStatus(enterAnimationDuration: string, exitAnimationDuration: string, status: string | String, id_processo: string | String): void {
    const dialogRefAdd = this.dialog.open(DialogChangeStatusProcessComponent, {
      width: '750px',
      data: { status: status, id_processo: id_processo },
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}