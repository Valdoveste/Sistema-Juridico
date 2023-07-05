import { Component, Inject, OnInit } from '@angular/core';
import { FaseService } from 'src/app/services/fase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoFase } from 'src/app/models/PROCESSO_FASE.model';

@Component({
  selector: 'app-dialog-edit-fase',
  templateUrl: './dialog-edit-fase.component.html',
  styleUrls: ['./dialog-edit-fase.component.scss']
})
export class DialogEditFaseComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private faseService: FaseService,
    public dialogRef: MatDialogRef<DialogEditFaseComponent>,
  ) { }

  updateFaseForm!: FormGroup;

  updateFaseRequest: ProcessoFase = {
    ID: '',
    FASE: ''
  }

  ngOnInit(): void {
    this.updateFaseForm = new FormGroup({
      FASE: new FormControl("", [Validators.required])
    });
  }

  updateFase() {
    if (this.updateFaseForm.valid) {
      this.updateFaseRequest.FASE = this.updateData.value;
      this.faseService.updateFase(this.updateData.id, this.updateFaseRequest)
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
