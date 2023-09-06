import { Component, OnInit, Inject } from '@angular/core';
import { ProcessoAcordo } from '../../../../../models/PROCESSO_ACORDO.model'
import { AcordoService } from 'src/app/services/acordo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-acordo',
  templateUrl: './dialog-add-acordo.component.html',
  styleUrls: ['./dialog-add-acordo.component.scss']
})
export class DialogAddAcordoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public addData: any,
    private acordoService: AcordoService,
    public dialogRef: MatDialogRef<DialogAddAcordoComponent>,
  ) { }

  createAcordoForm!: FormGroup;

  createAcordoRequest: ProcessoAcordo = {
    ID: '',
    DATA_ACORDO: '',
    ID_PROCESSO: '',
    VALOR_ACORDO: '',
    CRIADOR_ACORDO: '',
    CONDICOES_TENTATIVA_DE_ACORDO: ''
  }

  ngOnInit(): void {
    this.createAcordoForm = new FormGroup({
      VALOR_ACORDO: new FormControl('', [Validators.required]),
      CONDICOES_TENTATIVA_DE_ACORDO: new FormControl('', [Validators.required])
    });
  }

  createAcordo() {
    if (this.createAcordoForm.valid) {    
      this.acordoService.createAcordo(this.createAcordoRequest, this.addData.id)
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
