import { Component, OnInit } from '@angular/core';
import { ProcessoPatronoResponsavel } from 'src/app/models/PROCESSO_PATRONO_RESPONSAVEL.model';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
      PATRONO_RESPONSAVEL_CPF_CNPJ: new FormControl('',)
    });
  }

  createPatronoResponsavel() {
    if (this.createPatronoResponsavelForm.valid) {
      this.patronoResponsavelService.createPatronoResponsavel(this.createPatronoResponsavelRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
            console.log(response)
            this.createPatronoResponsavelForm.reset();
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
