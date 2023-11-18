import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoService } from 'src/app/services/processo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProcessoPatronosAnteriors } from 'src/app/models/PROCESSO_PATRONOS_ANTERIORES';
import { PatronoAnteriorService } from 'src/app/services/patrono-anterior.service';
import { ProcessoLogAlteracoes } from 'src/app/models/PROCESSO_LOG_ALTERACOES.model';
import { ProcessoLogAlteracoesService } from 'src/app/services/processo-log-alteracoes.service';
import { ProcessoAmbito } from 'src/app/models/PROCESSO_AMBITO.model';
import { ProcessoAreaDoDireito } from 'src/app/models/PROCESSO_AREA_DO_DIREITO.model';
import { ProcessoCondicoesTentativaAcordo } from 'src/app/models/PROCESSO_CONDICOES_TENTATIVA_ACORDO.model';
import { ProcessoEmpresas } from 'src/app/models/PROCESSO_EMPRESAS.model';
import { ProcessoFase } from 'src/app/models/PROCESSO_FASE.model';
import { ProcessoForoTribunalOrgao } from 'src/app/models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';
import { ProcessoMotivoDoEncerramento } from 'src/app/models/PROCESSO_MOTIVO_DO_ENCERRAMENTO.model';
import { ProcessoPatronoResponsavel } from 'src/app/models/PROCESSO_PATRONO_RESPONSAVEL.model';
import { ProcessoStatus } from 'src/app/models/PROCESSO_STATUS.model';
import { ProcessoTipoDeAcao } from 'src/app/models/PROCESSO_TIPO_DE_ACAO.model';
import { ProcessoVara } from 'src/app/models/PROCESSO_VARA.model';
import { AreaDoDireitoService } from 'src/app/services/area-do-direito.service';
import { CondicoesTentativaAcordoService } from 'src/app/services/condicoes-tentativa-acordo.service';
import { FaseService } from 'src/app/services/fase.service';
import { ForoTribunalOrgaoService } from 'src/app/services/foro-tribunal-orgao.service';
import { MotivoDoEncerramentoService } from 'src/app/services/motivo-do-encerramento.service';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';
import { StatusService } from 'src/app/services/status.service';
import { TipoDeAcaoService } from 'src/app/services/tipo-de-acao.service';
import { VaraService } from 'src/app/services/vara.service';
import { AmbitoService } from 'src/app/services/ambito.service';
import { EmpresasService } from 'src/app/services/empresas.service';

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
    private route: ActivatedRoute,
    private ProcessoService: ProcessoService,
    private PatronoAnteriorService: PatronoAnteriorService,
    private ProcessoLogAlteracoesService: ProcessoLogAlteracoesService,
    private AmbitoService: AmbitoService,
    private AreaDoDireito: AreaDoDireitoService,
    private CondicoesTentaivaAcordo: CondicoesTentativaAcordoService,
    private Fase: FaseService,
    private ForoTribunalOrgao: ForoTribunalOrgaoService,
    private MotivoDoEncerramento: MotivoDoEncerramentoService,
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

  @Input() updateProcessRequest: Processo = {
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
        next: (ambitos: any) => {
          this.ambitos = ambitos;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.EmpresasService.getAllEmpresas()
      .subscribe({
        next: (response: any) => {
          this.empresas = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })


    this.AreaDoDireito.getAllAreaDoDireito()
      .subscribe({
        next: (response: any) => {
          this.areasDoDireito = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.CondicoesTentaivaAcordo.getAllCondicoesTentativaAcordo()
      .subscribe({
        next: (response: any) => {
          this.condicoesTentativaAcordo = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.Fase.getAllFase()
      .subscribe({
        next: (response: any) => {
          this.fases = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.ForoTribunalOrgao.getAllForoTribunalOrgao()
      .subscribe({
        next: (response: any) => {
          this.foroTribunalOrgaos = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.MotivoDoEncerramento.getAllMotivoDoEncerramento()
      .subscribe({
        next: (response: any) => {
          this.motivosDoEncerramento = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.Status.getAllStatus()
      .subscribe({
        next: (response: any) => {
          this.status = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.TipoDeAcao.getAllTipoDeAcao()
      .subscribe({
        next: (response: any) => {
          this.tiposDeAcoes = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.Vara.getAllVara()
      .subscribe({
        next: (response: any) => {
          this.varas = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.PatronoResponsavel.getAllPatronoResponsavel()
      .subscribe({
        next: (response: any) => {
          this.patronoResponsaveis = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.route.paramMap.subscribe({
      next: (params) => {
        const id_process = params.get('id');
        if (id_process) {
          this.ProcessoService.getProcess(id_process).subscribe({
            next: (response) => {
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

  updateProcess() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id_processo = params.get('id')
        if (id_processo) {
          this.ProcessoService.updateProcess(id_processo, this.updateProcessRequest)
            .subscribe({
              next: (response: any) => {
                this.addLogAfterUpdateProcess(id_processo, response.modifiedInformation);
                this.addPatronoResponsavelOld(id_processo, response.modifiedInformation);
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
}