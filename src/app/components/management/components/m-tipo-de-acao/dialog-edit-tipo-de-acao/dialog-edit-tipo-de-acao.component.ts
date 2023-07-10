import { Component, Inject, OnInit } from '@angular/core';
import { TipoDeAcaoService } from 'src/app/services/tipo-de-acao.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoTipoDeAcao } from 'src/app/models/PROCESSO_TIPO_DE_ACAO.model';

@Component({
  selector: 'app-dialog-edit-tipo-de-acao',
  templateUrl: './dialog-edit-tipo-de-acao.component.html',
  styleUrls: ['./dialog-edit-tipo-de-acao.component.scss']
})
export class DialogEditTipoDeAcaoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private tipoDeAcaoService: TipoDeAcaoService,
    public dialogRef: MatDialogRef<DialogEditTipoDeAcaoComponent>,
  ) { }

  updateTipoDeAcaoForm!: FormGroup;

  updateTipoDeAcaoRequest: ProcessoTipoDeAcao = {
    ID: '',
    TIPO_DE_ACAO: ''
  }

  ngOnInit(): void {
    this.updateTipoDeAcaoForm = new FormGroup({
      TIPO_DE_ACAO: new FormControl("", [Validators.required])
    });
  }

  updateTiposDeAcao() {
    if (this.updateTipoDeAcaoForm.valid) {
      this.updateTipoDeAcaoRequest.TIPO_DE_ACAO = this.updateData.value;
      this.tipoDeAcaoService.updateTipoDeAcao(this.updateData.id, this.updateTipoDeAcaoRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
