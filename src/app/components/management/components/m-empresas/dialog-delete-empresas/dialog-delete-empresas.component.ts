import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-dialog-delete-empresas',
  templateUrl: './dialog-delete-empresas.component.html',
  styleUrls: ['./dialog-delete-empresas.component.scss']
})
export class DialogDeleteEmpresasComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private empresasService: EmpresasService,
    public dialogRef: MatDialogRef<DialogDeleteEmpresasComponent>
  ) { }

  deleteEmpresas() {
    this.empresasService.deleteEmpresas(this.removeData.id)
      .subscribe({
        next: (response) => {
          this.dialogRef.close(true);
        },
        error: (response) => {
          console.log(response);
        }
      });
  }
}
