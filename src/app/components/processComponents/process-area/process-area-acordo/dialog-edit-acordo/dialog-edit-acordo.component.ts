import { Component, Inject, OnInit } from '@angular/core';
import { AcordoService } from 'src/app/services/acordo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoAcordo } from 'src/app/models/PROCESSO_ACORDO.model';

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
    VALOR_ACORDO: '',
    ID_PROCESSO: '',
    CONDICOES_TENTATIVA_DE_ACORDO: ''
  }

  ngOnInit(): void {
    this.updateAcordoForm = new FormGroup({
      ACORDO: new FormControl("", [Validators.required])
    });
  }

  updateAcordo() {
    if (this.updateAcordoForm.valid) {
      this.updateAcordoRequest.CONDICOES_TENTATIVA_DE_ACORDO = this.updateData.value;
      this.acordoService.updateAcordo(this.updateData.id, this.updateAcordoRequest)
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
