import { Component, OnInit } from '@angular/core';
import { ProcessoAmbito } from 'src/app/models/PROCESSO_AMBITO.model';
import { AmbitoService } from 'src/app/services/ambito.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-ambito',
  templateUrl: './dialog-add-ambito.component.html',
  styleUrls: ['./dialog-add-ambito.component.scss']
})
export class DialogAddAmbitoComponent implements OnInit {
  constructor(
    private AmbitoService: AmbitoService,
    public dialogRef: MatDialogRef<DialogAddAmbitoComponent>,
  ) { }
  createAmbitoForm!: FormGroup;

  createAmbitoRequest: ProcessoAmbito = {
    ID: '',
    AMBITO: ''
  }

  ngOnInit(): void {
    this.createAmbitoForm = new FormGroup({
      AMBITO: new FormControl('', [Validators.required])
    });
  }

  createAmbito() {
    if (this.createAmbitoForm.valid) {
      this.AmbitoService.createAmbito(this.createAmbitoRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
            this.createAmbitoForm.reset();
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
