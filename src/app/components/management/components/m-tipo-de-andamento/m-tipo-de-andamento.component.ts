import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoTipoDeAndamento } from 'src/app/models/PROCESSO_TIPO_DE_ANDAMENTO.model';
import { TipoDeAndamentoService } from 'src/app/services/tipo-de-andamento.service';

import { DialogAddTipoDeAndamentoComponent } from './dialog-add-tipo-de-andamento/dialog-add-tipo-de-andamento.component';
import { DialogDeleteTipoDeAndamentoComponent } from './dialog-delete-tipo-de-andamento/dialog-delete-tipo-de-andamento.component';
import { DialogEditTipoDeAndamentoComponent } from './dialog-edit-tipo-de-andamento/dialog-edit-tipo-de-andamento.component';

@Component({
  selector: 'app-m-tipo-de-andamento',
  templateUrl: './m-tipo-de-andamento.component.html',
  styleUrls: ['./m-tipo-de-andamento.component.scss'],
})
export class MTipoDeAndamentoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private tipoDeAndamentoService: TipoDeAndamentoService
  ) { }

  tipoDeAndamentos: ProcessoTipoDeAndamento[] = [];

  ngOnInit(): void {
    this.loadTipoDeAndamentos();
  }

  loadTipoDeAndamentos() {
    this.tipoDeAndamentoService.getAllTipoDeAndamento()
      .subscribe({
        next: (tipoDeAndamentos: any) => {
          this.tipoDeAndamentos = tipoDeAndamentos;
        },
        error: (response: any) => {
          console.log(response)
        }
      })
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddTipoDeAndamentoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadTipoDeAndamentos() : null; })
  }

  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeleteTipoDeAndamentoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadTipoDeAndamentos() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditTipoDeAndamentoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadTipoDeAndamentos() : null; })
  }
}
