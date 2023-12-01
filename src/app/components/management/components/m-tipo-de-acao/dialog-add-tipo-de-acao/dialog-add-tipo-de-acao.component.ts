import { Component, OnInit } from '@angular/core';
import { ProcessoTipoDeAcao } from 'src/app/models/PROCESSO_TIPO_DE_ACAO.model';
import { TipoDeAcaoService } from 'src/app/services/tipo-de-acao.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog-add-tipo-de-acao',
  templateUrl: './dialog-add-tipo-de-acao.component.html',
  styleUrls: ['./dialog-add-tipo-de-acao.component.scss']
})
export class DialogAddTipoDeAcaoComponent implements OnInit {
  constructor(
    private tipoDeAcaoService: TipoDeAcaoService,
    public dialogRef: MatDialogRef<DialogAddTipoDeAcaoComponent>,
  ) { }

  createTipoDeAcaoForm!: FormGroup;

  createTipoDeAcaoRequest: ProcessoTipoDeAcao = {
    ID: '',
    TIPO_DE_ACAO: ''
  }

  ngOnInit(): void {
    this.createTipoDeAcaoForm = new FormGroup({
      TIPO_DE_ACAO: new FormControl('', [Validators.required])
    });
  }

  createTipoDeAcao() {
    if (this.createTipoDeAcaoForm.valid) {
      this.tipoDeAcaoService.createTipoDeAcao(this.createTipoDeAcaoRequest)
        .subscribe({
          next: () => {
            this.dialogRef.close(true);
            this.createTipoDeAcaoForm.reset();
          },
          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
    return;
  }
}
