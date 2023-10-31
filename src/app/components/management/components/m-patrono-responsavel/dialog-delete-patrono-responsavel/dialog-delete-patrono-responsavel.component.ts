import { Component, Inject, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';
import { ProcessoPatronoResponsavel } from 'src/app/models/PROCESSO_PATRONO_RESPONSAVEL.model';

@Component({
  selector: 'app-dialog-delete-patrono-responsavel',
  templateUrl: './dialog-delete-patrono-responsavel.component.html',
  styleUrls: ['./dialog-delete-patrono-responsavel.component.scss']
})
export class DialogDeletePatronoResponsavelComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public deleteData: any,
    private patronoResponsavelService: PatronoResponsavelService,
    public dialogRef: MatDialogRef<DialogDeletePatronoResponsavelComponent>
  ) { }

  deletePatronoResponsavelRequest: ProcessoPatronoResponsavel = {
    ID: '',
    PATRONO_RESPONSAVEL: '',
    PATRONO_RESPONSAVEL_CPF_CNPJ: ''
  }

  ngOnInit(): void {
    this.loadPatronoResponsavel();
  }

  loadPatronoResponsavel() {
    this.patronoResponsavelService.getPatronoResponsavel(this.deleteData.id)
      .subscribe({
        next: (response: any) => {
          this.deletePatronoResponsavelRequest = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

  deletePatronoResponsavel() {
    this.patronoResponsavelService.deletePatronoResponsavel(this.deleteData.id)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(true);
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}
