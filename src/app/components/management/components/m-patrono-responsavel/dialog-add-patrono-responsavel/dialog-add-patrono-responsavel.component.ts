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
    PATRONO_RESPONSAVEL: ''
  }

  ngOnInit(): void {
    this.createPatronoResponsavelForm = new FormGroup({
      PATRONORESPONSAVEL: new FormControl('', [Validators.required])
    });
  }

  createPatronoResponsavel() {
    if (this.createPatronoResponsavelForm.valid) {
      this.patronoResponsavelService.createPatronoResponsavel(this.createPatronoResponsavelRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
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
