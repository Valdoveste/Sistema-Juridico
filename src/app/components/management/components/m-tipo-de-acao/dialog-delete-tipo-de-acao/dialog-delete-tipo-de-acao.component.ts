import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoDeAcaoService } from 'src/app/services/tipo-de-acao.service';

@Component({
  selector: 'app-dialog-delete-tipo-de-acao',
  templateUrl: './dialog-delete-tipo-de-acao.component.html',
  styleUrls: ['./dialog-delete-tipo-de-acao.component.scss']
})
export class DialogDeleteTipoDeAcaoComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public removeData: any,
    private tipoDeAcaoService: TipoDeAcaoService,
    public dialogRef: MatDialogRef<DialogDeleteTipoDeAcaoComponent>
  ) { }

  deleteTipoDeAcao() {
    this.tipoDeAcaoService.deleteTipoDeAcao(this.removeData.id)
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        },
        error: (err: HttpErrorResponse) => console.log(err)
      });
  }
}
