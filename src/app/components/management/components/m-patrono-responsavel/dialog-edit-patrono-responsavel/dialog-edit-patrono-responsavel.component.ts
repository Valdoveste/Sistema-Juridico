import { Component, Inject, OnInit } from '@angular/core';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoPatronoResponsavel } from 'src/app/models/PROCESSO_PATRONORESPONSAVEL.model';

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
    PATRONO_RESPONSAVEL: ''
  }

  ngOnInit(): void {
    this.updatePatronoResponsavelForm = new FormGroup({
      PATRONORESPONSAVEL: new FormControl("", [Validators.required])
    });
  }

  updatePatronoResponsavel() {
    if (this.updatePatronoResponsavelForm.valid) {
      this.updatePatronoResponsavelRequest.PATRONO_RESPONSAVEL = this.updateData.value;
      this.patronoResponsavelService.updatePatronoResponsavel(this.updateData.id, this.updatePatronoResponsavelRequest)
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
