import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoService } from '../../../services/processo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AmbitoService } from '../../../services/ambito.service';
import { ProcessoAmbito } from '../../../models/PROCESSO_AMBITO.model';
import { AreaDoDireitoService } from '../../../services/area-do-direito.service';
import { FaseService } from '../../../services/fase.service';
import { ForoTribunalOrgaoService } from '../../../services/foro-tribunal-orgao.service';
import { ProcessoPatronoResponsavel } from '../../../models/PROCESSO_PATRONO_RESPONSAVEL.model';
import { StatusService } from '../../../services/status.service';
import { TipoDeAcaoService } from '../../../services/tipo-de-acao.service';
import { VaraService } from '../../../services/vara.service';
import { ProcessoAreaDoDireito } from '../../../models/PROCESSO_AREA_DO_DIREITO.model';
import { ProcessoCondicoesTentativaAcordo } from '../../../models/PROCESSO_CONDICOES_TENTATIVA_ACORDO.model';
import { ProcessoFase } from '../../../models/PROCESSO_FASE.model';
import { ProcessoForoTribunalOrgao } from '../../../models/PROCESSO_FORO_TRIBUNAL_ORGAO.model';
import { ProcessoMotivoDoEncerramento } from '../../../models/PROCESSO_MOTIVO_DO_ENCERRAMENTO.model';
import { ProcessoStatus } from '../../../models/PROCESSO_STATUS.model';
import { ProcessoTipoDeAcao } from '../../../models/PROCESSO_TIPO_DE_ACAO.model';
import { ProcessoVara } from '../../../models/PROCESSO_VARA.model';
import { PatronoResponsavelService } from '../../../services/patrono-responsavel.service';
import { Processo } from '../../../models/PROCESSO.model';
import { ProcessoEmpresas } from '../../../models/PROCESSO_EMPRESAS.model';
import { EmpresasService } from '../../../services/empresas.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MParteContrariaComponent } from '../../management/components/m-parte-contraria/m-parte-contraria.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-create',
  templateUrl: './process-create.component.html',
  styleUrls: ['./process-create.component.scss']
})

export class ProcessCreateComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private ProcessoService: ProcessoService,
    private AmbitoService: AmbitoService,
    private AreaDoDireito: AreaDoDireitoService,
    private Fase: FaseService,
    private ForoTribunalOrgao: ForoTribunalOrgaoService,
    private Status: StatusService,
    private TipoDeAcao: TipoDeAcaoService,
    private Vara: VaraService,
    private PatronoResponsavel: PatronoResponsavelService,
    private EmpresasService: EmpresasService,
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

  createProcess() {
    if (this.createProcessForm.valid) {
      this.ProcessoService.createProcess(this.createProcessRequest)
        .subscribe({
          next: (response: Processo) => {
            let id = response.ID_PROCESSO
            this.openDialogManagement('250ms', '100ms')
            this.router.navigate(['/painel-processos', 'processo-detalhes', response.ID_PROCESSO])
          },
          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
  }

  openDialogManagement(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefManagement = this.dialog.open(MParteContrariaComponent, {
      data: { numero_processo: this.createProcessRequest.NUMERO_PROCESSO },
      enterAnimationDuration,
      exitAnimationDuration
    });

    dialogRefManagement.afterClosed().subscribe({});
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
          this.patronoResponsavel = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })

    this.createProcessForm = new FormGroup({
      NUMERO_PROCESSO: new FormControl('', [Validators.required]),
      STATUS: new FormControl('', [Validators.required]),
      EMPRESA: new FormControl('', [Validators.required]),
      PATRONO_RESPONSAVEL: new FormControl('', [Validators.required]),
      TIPO_DE_ACAO: new FormControl('', [Validators.required]),
      AREA_DO_DIREITO: new FormControl('', [Validators.required]),
      AMBITO: new FormControl('', [Validators.required]),
      VARA: new FormControl('', [Validators.required]),
      FORO_TRIBUNAL_ORGAO: new FormControl('', [Validators.required]),
      FASE: new FormControl('', [Validators.required]),
      ESTADO: new FormControl('', [Validators.required]),
      CIDADE: new FormControl('', [Validators.required]),
      PAIS: new FormControl('', [Validators.required]),
      DATA_DISTRIBUICAO: new FormControl(Date, [Validators.required]),
      DATA_CITACAO: new FormControl(Date, [Validators.required]),
      TEXTO_DO_OBJETO: new FormControl('', [Validators.required]),
      VALOR_DO_PEDIDO: new FormControl(0, [Validators.required]),
      VALOR_INSTANCIA1: new FormControl(0, [Validators.required]),
      VALOR_INSTANCIA2: new FormControl(0, [Validators.required]),
      VALOR_INSTANCIA3: new FormControl(0, [Validators.required]),
      VALOR_INSTANCIA_EXTRAORDINARIA: new FormControl(0, [Validators.required]),
      DATA_CADASTRO_PROCESSO: new FormControl(''),
      DATA_ULTIMO_ANDAMENTO: new FormControl(''),
      DATA_ENCERRAMENTO: new FormControl(''),
      MOTIVO_ENCERRAMENTO: new FormControl(''),
      MOTIVO_BAIXA_PROVISORIA: new FormControl('')
    });
  }
}
