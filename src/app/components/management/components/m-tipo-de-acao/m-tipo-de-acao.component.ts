import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoTipoDeAcao } from 'src/app/models/PROCESSO_TIPO_DE_ACAO.model';
import { TipoDeAcaoService } from 'src/app/services/tipo-de-acao.service';

import { DialogAddTipoDeAcaoComponent } from './dialog-add-tipo-de-acao/dialog-add-tipo-de-acao.component';
import { DialogDeleteTipoDeAcaoComponent } from './dialog-delete-tipo-de-acao/dialog-delete-tipo-de-acao.component';
import { DialogEditTipoDeAcaoComponent } from './dialog-edit-tipo-de-acao/dialog-edit-tipo-de-acao.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-m-tipo-de-acao',
  templateUrl: './m-tipo-de-acao.component.html',
  styleUrls: ['./m-tipo-de-acao.component.scss'],
})
export class MTipoDeAcaoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private tipoDeAcaoService: TipoDeAcaoService
  ) { }

  tipoDeAcoes: ProcessoTipoDeAcao[] = [];

  ngOnInit(): void {
    this.loadTipoDeAcoes();
  }

  loadTipoDeAcoes() {
    this.tipoDeAcaoService.getAllTipoDeAcao()
      .subscribe({
        next: (tipoDeAcoes: ProcessoTipoDeAcao[]) => {
          this.tipoDeAcoes = tipoDeAcoes;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddTipoDeAcaoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadTipoDeAcoes() : null; })
  }


  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeleteTipoDeAcaoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadTipoDeAcoes() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditTipoDeAcaoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadTipoDeAcoes() : null; })
  }
}
