import { Component, OnInit, Inject } from '@angular/core';
import { ProcessoAndamento } from '../../../../../models/PROCESSO_ANDAMENTO.model'
import { AndamentoService } from 'src/app/services/andamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoDeAndamentoService } from 'src/app/services/tipo-de-andamento.service';
import { ProcessoTipoDeAndamento } from 'src/app/models/PROCESSO_TIPO_DE_ANDAMENTO.model';

@Component({
  selector: 'app-dialog-add-andamento',
  templateUrl: './dialog-add-andamento.component.html',
  styleUrls: ['./dialog-add-andamento.component.scss']
})
export class DialogAddAndamentoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public addData: any,
    private andamentoService: AndamentoService,
    private tipoDeAndamentoService: TipoDeAndamentoService,
    public dialogRef: MatDialogRef<DialogAddAndamentoComponent>,
  ) { }

  tiposAndamentos: ProcessoTipoDeAndamento[] = [];

  createAndamentoForm!: FormGroup;

  createAndamentoRequest: ProcessoAndamento = {
    ID: '',
    TIPO_DE_ANDAMENTO: '',
    DATA_ANDAMENTO: '',
    ID_PROCESSO: '',
    CRIADOR_ANDAMENTO: '',
    DESC_ANDAMENTO: '',
    DATA_CADASTRO: '',
  }

  ngOnInit(): void {

    this.tipoDeAndamentoService.getAllTipoDeAndamento()
      .subscribe({
        next: (response) => {
          this.tiposAndamentos = response;
        },
        error: (response) => {
          console.log(response)
        }
      })

    this.createAndamentoForm = new FormGroup({
      DESC_ANDAMENTO: new FormControl('', [Validators.required]),
      TIPO_DE_ANDAMENTO: new FormControl('', [Validators.required])
    });
  }

  createAndamento() {
    if (this.createAndamentoForm.valid) {
      this.andamentoService.createAndamento(this.createAndamentoRequest, this.addData.id)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
            this.createAndamentoForm.reset();
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
