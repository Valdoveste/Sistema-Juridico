import { Component, OnInit, Inject } from '@angular/core';
import { ProcessoAndamento } from '../../../../../models/PROCESSO_ANDAMENTO.model'
import { AndamentoService } from 'src/app/services/andamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-andamento',
  templateUrl: './dialog-add-andamento.component.html',
  styleUrls: ['./dialog-add-andamento.component.scss']
})
export class DialogAddAndamentoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public addData: any,
    private andamentoService: AndamentoService,
    public dialogRef: MatDialogRef<DialogAddAndamentoComponent>,
  ) { }

  createAndamentoForm!: FormGroup;

  createAndamentoRequest: ProcessoAndamento = {
    ID: '',
    TIPO_ANDAMENTO: '',
    DATA_ANDAMENTO: '',
    ID_PROCESSO: '',
    CRIADOR_ANDAMENTO: '',
    DESC_ANDAMENTO: '',
    DATA_CADASTRO: '',
  }

  ngOnInit(): void {
    this.createAndamentoForm = new FormGroup({
      VALOR_ANDAMENTO: new FormControl('', [Validators.required]),
      CONDICOES_TENTATIVA_DE_ANDAMENTO: new FormControl('', [Validators.required])
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
