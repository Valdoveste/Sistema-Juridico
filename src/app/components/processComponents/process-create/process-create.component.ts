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
    private PatronoResponsavel: PatronoResponsavelService
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

  componentName: string = '';

  swapTabs(componentName: string): void {
    this.componentName = componentName;
  }


  createProcessResquest: Processo = {
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
  }

  ngOnInit(): void {

    // constructor(private ambitoService: AmbitoService) { }

    this.AmbitoService.getAllAmbito()
      .subscribe({
        next: (ambitos: any) => {
          this.ambitos = ambitos;
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

    this.CondicoesTentaivaAcordo.getAllCondicoesTentativaAcordo()
      .subscribe({
        next: (condicoesTentativaAcordo: any) => {
          this.condicoesTentativaAcordo = condicoesTentativaAcordo;
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

    this.ForoTribunalOrgao.getAllForoTribunalOrgao()
      .subscribe({
        next: (foroTribunalOrgaos: any) => {
          this.foroTribunalOrgaos = foroTribunalOrgaos;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.MotivoDoEncerramento.getAllMotivoDoEncerramento()
      .subscribe({
        next: (motivosDoEncerramento: any) => {
          this.motivosDoEncerramento = motivosDoEncerramento;
        },
        error: (response: any) => {
          console.log(response)
        }
      })

    this.Status.getAllStatus()
      .subscribe({
        next: (status: any) => {
          this.status = status;
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

    this.Vara.getAllVara()
      .subscribe({
        next: (varas: any) => {
          this.varas = varas;
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


    this.createProcessForm = new FormGroup({
      // ID_PROCESSO: new FormControl(''),
      NUMERO_PROCESSO: new FormControl('', [Validators.required]),
      EMPRESA: new FormControl('', [Validators.required]),
      // EMPRESA_CNPJ: new FormControl('', [Validators.required]),
      STATUS: new FormControl('', [Validators.required]),
      TIPO_DE_ACAO: new FormControl('', [Validators.required]),
      AREA_DO_DIREITO: new FormControl('', [Validators.required]),
      AMBITO: new FormControl('', [Validators.required]),
      PROCESSO_ESTADO: new FormControl('', [Validators.required]),
      PROCESSO_CIDADE: new FormControl('', [Validators.required]),
      PROCESSO_PAIS: new FormControl('', [Validators.required]),
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
      MOTIVO_BAIXA_PROVISORIA: new FormControl(''),
      // PARTE_CONTRARIA_NOME: new FormControl('', [Validators.required]),
      // PARTE_CONTRARIA_NOME_FANTASIA: new FormControl(''),
      // PARTE_CONTRARIA_CPF: new FormControl(''),
      // PARTE_CONTRARIA_CNPJ: new FormControl(''),
      // PARTE_CONTRARIA_RG: new FormControl(''),
      // PARTE_CONTRARIA_ENDERECO: new FormControl('', [Validators.required]),
      // PARTE_CONTRARIA_CEP: new FormControl('', [Validators.required]),
      // PARTE_CONTRARIA_NUMERO: new FormControl('', [Validators.required]),
      // PARTE_CONTRARIA_COMPLEMENTO: new FormControl('', [Validators.required]),
      // PARTE_CONTRARIA_ESTADO: new FormControl('', [Validators.required]),
      // PARTE_CONTRARIA_PAIS: new FormControl('', [Validators.required]),
      // PARTE_CONTRARIA_OBSERVACAO: new FormControl(''),
      // PARTE_CONTRARIA_CIDADE: new FormControl('', [Validators.required]),
      // PARTE_CONTRARIA_CARGO: new FormControl(''),
      // PARTE_CONTRARIA_DATA_ADMISSAO: new FormControl(''),
      // PARTE_CONTRARIA_DATA_DEMISSAO: new FormControl(''),
      // PARTE_CONTRARIA_ULTIMO_SALARIO: new FormControl('')
    });
  }

  createProcess() {
    console.log(this.createProcessForm.errors)
    if (this.createProcessForm.valid) {
      this.ProcessoService.createProcess(this.createProcessResquest)
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
