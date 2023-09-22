import { Component, OnInit } from '@angular/core';
import { ProcessoService } from '../../../services/processo.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AmbitoService } from 'src/app/services/ambito.service';
import { ProcessoAmbito } from 'src/app/models/PROCESSO_AMBITO.model';
import { AreaDoDireitoService } from 'src/app/services/area-do-direito.service';
import { CondicoesTentativaAcordoService } from 'src/app/services/condicoes-tentativa-acordo.service';
import { FaseService } from 'src/app/services/fase.service';
import { ForoTribunalOrgaoService } from 'src/app/services/foro-tribunal-orgao.service';
import { MotivoDoEncerramentoService } from 'src/app/services/motivo-do-encerramento.service';
import { ProcessoPatronoResponsavel } from 'src/app/models/PROCESSO_PATRONO_RESPONSAVEL.model';
import { StatusService } from 'src/app/services/status.service';
import { TipoDeAcaoService } from 'src/app/services/tipo-de-acao.service';
import { VaraService } from 'src/app/services/vara.service';
import { ProcessoAreaDoDireito } from 'src/app/models/PROCESSO_AREA_DO_DIREITO.model';
import { ProcessoCondicoesTentativaAcordo } from 'src/app/models/PROCESSO_CONDICOES_TENTATIVA_ACORDO.model';
import { ProcessoFase } from 'src/app/models/PROCESSO_FASE.model';
import { ProcessoForoTribunalOrgao } from 'src/app/models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';
import { ProcessoMotivoDoEncerramento } from 'src/app/models/PROCESSO_MOTIVO_DO_ENCERRAMENTO.model';
import { ProcessoStatus } from 'src/app/models/PROCESSO_STATUS.model';
import { ProcessoTipoDeAcao } from 'src/app/models/PROCESSO_TIPO_DE_ACAO.model';
import { ProcessoVara } from 'src/app/models/PROCESSO_VARA.model';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';
import { Processo } from 'src/app/models/PROCESSO.model';
import { ProcessoEmpresas } from 'src/app/models/PROCESSO_EMPRESAS.model';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-process-create',
  templateUrl: './process-create.component.html',
  styleUrls: ['./process-create.component.scss']
})

export class ProcessCreateComponent implements OnInit {
  constructor(
    private router: Router,
    private ProcessoService: ProcessoService,
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

  createProcessForm!: FormGroup;

  ambitos: ProcessoAmbito[] = [];
  areasDoDireito: ProcessoAreaDoDireito[] = [];
  condicoesTentativaAcordo: ProcessoCondicoesTentativaAcordo[] = [];
  fases: ProcessoFase[] = [];
  foroTribunalOrgaos: ProcessoForoTribunalOrgao[] = [];
  motivosDoEncerramento: ProcessoMotivoDoEncerramento[] = [];
  status: ProcessoStatus[] = [];
  tiposDeAcoes: ProcessoTipoDeAcao[] = [];
  varas: ProcessoVara[] = [];
  patronoResponsavel: ProcessoPatronoResponsavel[] = [];
  empresas: ProcessoEmpresas[] = [];

  componentName: string = '';

  swapTabs(componentName: string): void {
    this.componentName = componentName;
  }

  createProcessRequest: Processo = {
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
  }

  ngOnInit(): void {
    this.AmbitoService.getAllAmbito()
      .subscribe({
        next: (ambitos: any) => {
          this.ambitos = ambitos;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.EmpresasService.getAllEmpresas()
      .subscribe({
        next: (response: any) => {
          this.empresas = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })


    this.AreaDoDireito.getAllAreaDoDireito()
      .subscribe({
        next: (response: any) => {
          this.areasDoDireito = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.CondicoesTentaivaAcordo.getAllCondicoesTentativaAcordo()
      .subscribe({
        next: (response: any) => {
          this.condicoesTentativaAcordo = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.Fase.getAllFase()
      .subscribe({
        next: (response: any) => {
          this.fases = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.ForoTribunalOrgao.getAllForoTribunalOrgao()
      .subscribe({
        next: (response: any) => {
          this.foroTribunalOrgaos = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.MotivoDoEncerramento.getAllMotivoDoEncerramento()
      .subscribe({
        next: (response: any) => {
          this.motivosDoEncerramento = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.Status.getAllStatus()
      .subscribe({
        next: (response: any) => {
          this.status = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.TipoDeAcao.getAllTipoDeAcao()
      .subscribe({
        next: (response: any) => {
          this.tiposDeAcoes = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.Vara.getAllVara()
      .subscribe({
        next: (response: any) => {
          this.varas = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.PatronoResponsavel.getAllPatronoResponsavel()
      .subscribe({
        next: (response: any) => {
          this.patronoResponsavel = response;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.createProcessForm = new FormGroup({
      // ID_PROCESSO: new FormControl(''),
      NUMERO_PROCESSO: new FormControl('', [Validators.required]),
      EMPRESA: new FormControl('', [Validators.required]),
      // EMPRESA_CNPJ: new FormControl('', [Validators.required]),
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

  createProcess() {
    console.log(this.createProcessForm.errors)
    if (this.createProcessForm.valid) {
      this.ProcessoService.createProcess(this.createProcessRequest)
        .subscribe({
          next: (response) => {
            this.router.navigate(['painel-processos'])
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
