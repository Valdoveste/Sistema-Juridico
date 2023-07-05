import { Component, OnInit } from '@angular/core';
import { ProcessoFase } from 'src/app/models/PROCESSO_FASE.model';
import { FaseService } from 'src/app/services/fase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-fase',
  templateUrl: './dialog-add-fase.component.html',
  styleUrls: ['./dialog-add-fase.component.scss']
})
export class DialogAddFaseComponent implements OnInit {
  constructor(
    private FaseService: FaseService,
    public dialogRef: MatDialogRef<DialogAddFaseComponent>,
  ) { }

  createFaseForm!: FormGroup;

  createFaseRequest: ProcessoFase = {
    ID: '',
    FASE: ''
  }

  ngOnInit(): void {
    this.createFaseForm = new FormGroup({
      FASE: new FormControl('', [Validators.required])
    });
  }

  createFase() {
    if (this.createFaseForm.valid) {
      this.FaseService.createFase(this.createFaseRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
            this.createFaseForm.reset();
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
