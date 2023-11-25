import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoAcordo } from 'src/app/models/PROCESSO_ACORDO.model';
import { AcordoService } from 'src/app/services/acordo.service';

@Component({
  selector: 'app-dialog-delete-acordo',
  templateUrl: './dialog-delete-acordo.component.html',
  styleUrls: ['./dialog-delete-acordo.component.scss']
})
export class DialogDeleteAcordoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public viewData: any,
    private acordoService: AcordoService,
    public dialogRef: MatDialogRef<DialogDeleteAcordoComponent>

  ) { }

  acordoDeleteRequest: ProcessoAcordo = {
    ID: '',
    DATA_ACORDO: '',
    VALOR_ACORDO: 0,
    ID_PROCESSO: '',
    CRIADOR_ACORDO: '',
    CONDICOES_TENTATIVA_DE_ACORDO: ''
  };

  ngOnInit(): void {
    this.acordoService.getProcessoAcordo(this.viewData.id)
      .subscribe({
        next: (response: ProcessoAcordo) => {
          this.acordoDeleteRequest = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

  deleteAcordo() {
    this.acordoService.deleteAcordo(this.viewData.id)
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }
}
