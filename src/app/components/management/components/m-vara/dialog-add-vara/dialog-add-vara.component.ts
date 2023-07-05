import { Component, OnInit } from '@angular/core';
import { ProcessoVara } from 'src/app/models/PROCESSO_VARA.model';
import { VaraService } from 'src/app/services/vara.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-vara',
  templateUrl: './dialog-add-vara.component.html',
  styleUrls: ['./dialog-add-vara.component.scss']
})
export class DialogAddVaraComponent implements OnInit {
  constructor(
    private VaraService: VaraService,
    public dialogRef: MatDialogRef<DialogAddVaraComponent>,
  ) { }

  createVaraForm!: FormGroup;

  createVaraRequest: ProcessoVara = {
    ID: '',
    VARA: ''
  }

  ngOnInit(): void {
    this.createVaraForm = new FormGroup({
      VARA: new FormControl('', [Validators.required])
    });
  }

  createVara() {
    if (this.createVaraForm.valid) {
      this.VaraService.createVara(this.createVaraRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
            this.createVaraForm.reset();
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}