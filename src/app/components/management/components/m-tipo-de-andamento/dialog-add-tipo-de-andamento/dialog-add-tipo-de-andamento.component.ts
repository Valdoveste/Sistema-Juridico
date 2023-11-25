import { Component, OnInit } from '@angular/core';
import { ProcessoTipoDeAndamento } from 'src/app/models/PROCESSO_TIPO_DE_ANDAMENTO.model';
import { TipoDeAndamentoService } from 'src/app/services/tipo-de-andamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog-add-tipo-de-andamento',
  templateUrl: './dialog-add-tipo-de-andamento.component.html',
  styleUrls: ['./dialog-add-tipo-de-andamento.component.scss']
})
export class DialogAddTipoDeAndamentoComponent implements OnInit {
  constructor(
    private tipoDeAndamentoService: TipoDeAndamentoService,
    public dialogRef: MatDialogRef<DialogAddTipoDeAndamentoComponent>,
  ) { }

  createTipoDeAndamentoForm!: FormGroup;

  createTipoDeAndamentoRequest: ProcessoTipoDeAndamento = {
    ID: '',
    TIPO_DE_ANDAMENTO: ''
  }

  ngOnInit(): void {
    this.createTipoDeAndamentoForm = new FormGroup({
      TIPO_DE_ANDAMENTO: new FormControl('', [Validators.required])
    });
  }

  createTipoDeAndamento() {
    if (this.createTipoDeAndamentoForm.valid) {
      this.tipoDeAndamentoService.createTipoDeAndamento(this.createTipoDeAndamentoRequest)
        .subscribe({
          next: () => {
            this.dialogRef.close(true);
          },
          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
  }
}
