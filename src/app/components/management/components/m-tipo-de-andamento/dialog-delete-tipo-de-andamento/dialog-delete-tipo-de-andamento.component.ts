import { Component, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoDeAndamentoService } from 'src/app/services/tipo-de-andamento.service';

@Component({
  selector: 'app-dialog-delete-tipo-de-andamento',
  templateUrl: './dialog-delete-tipo-de-andamento.component.html',
  styleUrls: ['./dialog-delete-tipo-de-andamento.component.scss']
})
export class DialogDeleteTipoDeAndamentoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private tipoDeAndamentoService: TipoDeAndamentoService,
    public dialogRef: MatDialogRef<DialogDeleteTipoDeAndamentoComponent>
  ) { }

  deleteTipoDeAndamento() {
    this.tipoDeAndamentoService.deleteTipoDeAndamento(this.removeData.id)
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}
