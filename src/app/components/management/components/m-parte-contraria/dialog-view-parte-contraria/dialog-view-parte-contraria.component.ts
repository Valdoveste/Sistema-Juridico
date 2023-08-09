import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { DialogEditParteContriaComponent } from '../dialog-edit-parte-contraria/dialog-edit-parte-contraria.component';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';

@Component({
  selector: 'app-dialog-view-parte-contraria',
  templateUrl: './dialog-view-parte-contraria.component.html',
  styleUrls: ['./dialog-view-parte-contraria.component.scss']
})
export class DialogViewParteContrariaComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private ParteContrariaService: ParteContrariaService,
    public dialogRef: MatDialogRef<DialogEditParteContriaComponent>,
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
    this.ParteContrariaService.getParteContraria(this.updateData.id).subscribe({
      next: (response) => {
        this.viewParteContriaRequest = response;
        this.componentName = response.PF_PJ;
      }
    }
    )

  }
}
  