import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';
import { ProcessoPatronoResponsavel } from 'src/app/models/PROCESSO_PATRONO_RESPONSAVEL.model';

@Component({
  selector: 'app-dialog-add-patrono-responsavel',
  templateUrl: './dialog-add-patrono-responsavel.component.html',
  styleUrls: ['./dialog-add-patrono-responsavel.component.scss']
})
export class DialogAddPatronoResponsavelComponent implements OnInit {
  constructor(
    private patronoResponsavelService: PatronoResponsavelService,
    public dialogRef: MatDialogRef<DialogAddPatronoResponsavelComponent>,
  ) { }

  createPatronoResponsavelForm!: FormGroup;

  createPatronoResponsavelRequest: ProcessoPatronoResponsavel = {
    ID: '',
    PATRONO_RESPONSAVEL: '',
    PATRONO_RESPONSAVEL_CPF_CNPJ: ''
  }

  ngOnInit(): void {
    this.createPatronoResponsavelForm = new FormGroup({
      PATRONO_RESPONSAVEL: new FormControl('', [Validators.required]),
      PATRONO_RESPONSAVEL_CPF_CNPJ: new FormControl('', [Validators.required])
    });
  }

  createPatronoResponsavel() {
    if (this.createPatronoResponsavelForm.valid) {
      this.patronoResponsavelService.createPatronoResponsavel(this.createPatronoResponsavelRequest)
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
