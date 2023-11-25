import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';
import { ProcessoPatronoResponsavel } from 'src/app/models/PROCESSO_PATRONO_RESPONSAVEL.model';

@Component({
  selector: 'app-dialog-edit-patrono-responsavel',
  templateUrl: './dialog-edit-patrono-responsavel.component.html',
  styleUrls: ['./dialog-edit-patrono-responsavel.component.scss']
})
export class DialogEditPatronoResponsavelComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private patronoResponsavelService: PatronoResponsavelService,
    public dialogRef: MatDialogRef<DialogEditPatronoResponsavelComponent>,
  ) { }

  updatePatronoResponsavelForm!: FormGroup;

  updatePatronoResponsavelRequest: ProcessoPatronoResponsavel = {
    ID: '',
    PATRONO_RESPONSAVEL: '',
    PATRONO_RESPONSAVEL_CPF_CNPJ: ''
  }

  ngOnInit(): void {
    this.updatePatronoResponsavelForm = new FormGroup({
      PATRONO_RESPONSAVEL: new FormControl("", [Validators.required]),
      PATRONO_RESPONSAVEL_CPF_CNPJ: new FormControl("", [Validators.required])
    });

    this.loadPatronoResponsavel();
  }

  loadPatronoResponsavel() {
    this.patronoResponsavelService.getPatronoResponsavel(this.updateData.id)
      .subscribe({
        next: (response: ProcessoPatronoResponsavel) => {
          this.updatePatronoResponsavelRequest = response;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

  updatePatronoResponsavel() {
    if (this.updatePatronoResponsavelForm.valid) {
      this.updatePatronoResponsavelRequest.PATRONO_RESPONSAVEL = this.updateData.value;
      this.patronoResponsavelService.updatePatronoResponsavel(this.updateData.id, this.updatePatronoResponsavelRequest)
        .subscribe({
          next: () => {
            this.dialogRef.close(true);
          },
          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
    return;
  }
}
