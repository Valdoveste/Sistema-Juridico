import { Component, Inject, OnInit } from '@angular/core';
import { AmbitoService } from 'src/app/services/ambito.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoAmbito } from 'src/app/models/PROCESSO_AMBITO.model';

@Component({
  selector: 'app-dialog-edit-ambito',
  templateUrl: './dialog-edit-ambito.component.html',
  styleUrls: ['./dialog-edit-ambito.component.scss']
})
export class DialogEditAmbitoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private AmbitoService: AmbitoService,
    public dialogRef: MatDialogRef<DialogEditAmbitoComponent>,
  ) { }

  updateAmbitoForm!: FormGroup;

  updateAmbitoRequest: ProcessoAmbito = {
    ID: '',
    AMBITO: ''
  }

  ngOnInit(): void {
    this.updateAmbitoForm = new FormGroup({
      AMBITO: new FormControl("", [Validators.required])
    });
  }

  updateAmbitos() {
    if (this.updateAmbitoForm.valid) {
      this.updateAmbitoRequest.AMBITO = this.updateData.value;
      this.AmbitoService.updateAmbito(this.updateData.id, this.updateAmbitoRequest)
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
