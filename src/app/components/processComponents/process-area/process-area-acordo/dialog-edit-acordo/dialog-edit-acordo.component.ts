import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { AcordoService } from 'src/app/services/acordo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProcessoAcordo } from 'src/app/models/PROCESSO_ACORDO.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-acordo',
  templateUrl: './dialog-edit-acordo.component.html',
  styleUrls: ['./dialog-edit-acordo.component.scss']
})
export class DialogEditAcordoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private acordoService: AcordoService,
    public dialogRef: MatDialogRef<DialogEditAcordoComponent>,
  ) { }

  updateAcordoForm!: FormGroup;

  updateAcordoRequest: ProcessoAcordo = {
    ID: '',
    DATA_ACORDO: '',
    CRIADOR_ACORDO: '',
    VALOR_ACORDO: 0,
    ID_PROCESSO: '',
    CONDICOES_TENTATIVA_DE_ACORDO: ''
  }

  ngOnInit(): void {
    this.updateAcordoForm = new FormGroup({
      VALOR_ACORDO: new FormControl('', [Validators.required]),
      CONDICOES_TENTATIVA_DE_ACORDO: new FormControl('', [Validators.required])
    });

    this.loadProcessoAcorod();
  }

  loadProcessoAcorod() {
    this.acordoService.getProcessoAcordo(this.updateData.id)
      .subscribe({
        next: (response) => {
          this.updateAcordoRequest = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

  updateAcordo() {
    if (this.updateAcordoForm.valid) {
      this.acordoService.updateAcordo(this.updateData.id, this.updateAcordoRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
          },

          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
    return;
  }
}
