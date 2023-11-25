import { Component, Inject, OnInit } from '@angular/core';
import { VaraService } from 'src/app/services/vara.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoVara } from 'src/app/models/PROCESSO_VARA.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog-edit-vara',
  templateUrl: './dialog-edit-vara.component.html',
  styleUrls: ['./dialog-edit-vara.component.scss']
})
export class DialogEditVaraComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private varaService: VaraService,
    public dialogRef: MatDialogRef<DialogEditVaraComponent>,
  ) { }

  updateVaraForm!: FormGroup;

  updateVaraRequest: ProcessoVara = {
    ID: '',
    VARA: ''
  }

  ngOnInit(): void {
    this.updateVaraForm = new FormGroup({
      VARA: new FormControl("", [Validators.required])
    });
  }

  updateVaras() {
    if (this.updateVaraForm.valid) {
      this.updateVaraRequest.VARA = this.updateData.value;
      this.varaService.updateVara(this.updateData.id, this.updateVaraRequest)
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
