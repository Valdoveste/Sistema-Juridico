import { Component, Inject, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoDeAndamentoService } from 'src/app/services/tipo-de-andamento.service';
import { ProcessoTipoDeAndamento } from 'src/app/models/PROCESSO_TIPO_DE_ANDAMENTO.model';

@Component({
  selector: 'app-dialog-edit-tipo-de-andamento',
  templateUrl: './dialog-edit-tipo-de-andamento.component.html',
  styleUrls: ['./dialog-edit-tipo-de-andamento.component.scss']
})
export class DialogEditTipoDeAndamentoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private tipoDeAndamentoService: TipoDeAndamentoService,
    public dialogRef: MatDialogRef<DialogEditTipoDeAndamentoComponent>,
  ) { }

  updateTipoDeAndamentoForm!: FormGroup;

  updateTipoDeAndamentoRequest: ProcessoTipoDeAndamento = {
    ID: '',
    TIPO_DE_ANDAMENTO: ''
  }

  ngOnInit(): void {
    this.updateTipoDeAndamentoForm = new FormGroup({
      TIPO_DE_ANDAMENTO: new FormControl("", [Validators.required])
    });
  }

  updateTipoDeAndamentos() {
    if (this.updateTipoDeAndamentoForm.valid) {
      this.updateTipoDeAndamentoRequest.TIPO_DE_ANDAMENTO = this.updateData.value;
      this.tipoDeAndamentoService.updateTipoDeAndamento(this.updateData.id, this.updateTipoDeAndamentoRequest)
        .subscribe({
          next: () => {
            this.dialogRef.close(true);
          },
          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
  }
}
