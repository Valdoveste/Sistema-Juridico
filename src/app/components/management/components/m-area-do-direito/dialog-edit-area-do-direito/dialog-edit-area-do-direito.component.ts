import { Component, Inject, OnInit } from '@angular/core';
import { AreaDoDireitoService } from 'src/app/services/area-do-direito.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProcessoAreaDoDireito } from 'src/app/models/PROCESSO_AREA_DO_DIREITO.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog-edit-area-do-direito',
  templateUrl: './dialog-edit-area-do-direito.component.html',
  styleUrls: ['./dialog-edit-area-do-direito.component.scss']
})
export class DialogEditAreaDoDireitoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public updateData: any,
    private areaDoDireitoService: AreaDoDireitoService,
    public dialogRef: MatDialogRef<DialogEditAreaDoDireitoComponent>,
  ) { }

  updateAreaDoDireitoForm!: FormGroup;

  updateAreaDoDireitoRequest: ProcessoAreaDoDireito = {
    ID: '',
    AREA_DO_DIREITO: ''
  }

  ngOnInit(): void {
    this.updateAreaDoDireitoForm = new FormGroup({
      AREA_DO_DIREITO: new FormControl("", [Validators.required])
    });
  }

  updateAreasDoDireito() {
    if (this.updateAreaDoDireitoForm.valid) {
      this.updateAreaDoDireitoRequest.AREA_DO_DIREITO = this.updateData.value;
      this.areaDoDireitoService.updateAreaDoDireito(this.updateData.id, this.updateAreaDoDireitoRequest)
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
