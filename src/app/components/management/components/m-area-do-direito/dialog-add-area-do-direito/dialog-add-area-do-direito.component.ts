import { Component, OnInit } from '@angular/core';
import { ProcessoAreaDoDireito } from 'src/app/models/PROCESSO_AREA_DO_DIREITO.model';
import { AreaDoDireitoService } from 'src/app/services/area-do-direito.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-area-do-direito',
  templateUrl: './dialog-add-area-do-direito.component.html',
  styleUrls: ['./dialog-add-area-do-direito.component.scss']
})
export class DialogAddAreaDoDireitoComponent implements OnInit {
  constructor(
    private areaDoDireitoService: AreaDoDireitoService,
    public dialogRef: MatDialogRef<DialogAddAreaDoDireitoComponent>,
  ) { }

  createAreaDoDireitoForm!: FormGroup;

  createAreaDoDireitoRequest: ProcessoAreaDoDireito = {
    ID: '',
    AREA_DO_DIREITO: ''
  }

  ngOnInit(): void {
    this.createAreaDoDireitoForm = new FormGroup({
      AREA_DO_DIREITO: new FormControl('', [Validators.required])
    });
  }

  createAreaDoDireito() {
    if (this.createAreaDoDireitoForm.valid) {
      this.areaDoDireitoService.createAreaDoDireito(this.createAreaDoDireitoRequest)
        .subscribe({
          next: (response) => {
            this.dialogRef.close(true);
            this.createAreaDoDireitoForm.reset();
          },
          error: (response) => {
            console.log(response)
          }
        });
    }
    return;
  }
}
