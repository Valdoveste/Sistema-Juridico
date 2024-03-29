import { Component, Inject, OnInit } from '@angular/core';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';
import { DialogAddParteContrariaComponent } from './dialog-add-parte-contraria/dialog-add-parte-contraria.component';
import { DialogDeleteParteContrariaComponent } from './dialog-delete-parte-contraria/dialog-delete-parte-contraria.component';
import { DialogEditParteContriaComponent } from './dialog-edit-parte-contraria/dialog-edit-parte-contraria.component';
import { DialogViewParteContrariaComponent } from './dialog-view-parte-contraria/dialog-view-parte-contraria.component';
import { DialogLinkParteContrariaComponent } from './dialog-link-parte-contraria/dialog-link-parte-contraria.component';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-m-parte-contraria',
  templateUrl: './m-parte-contraria.component.html',
  styleUrls: ['./m-parte-contraria.component.scss'],
})
export class MParteContrariaComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public linkableData: { numero_processo?: string | String },
    public dialog: MatDialog,
    protected ParteContrariaService: ParteContrariaService,
  ) {
    if (!linkableData.numero_processo) { linkableData.numero_processo = '' }
  }

  partecontrarias: ProcessoParteContraria[] = [];

  ngOnInit(): void {
    this.loadParteContrarias();
  }

  loadParteContrarias() {
    this.ParteContrariaService.getAllParteContraria()
      .subscribe({
        next: (partecontrarias: ProcessoParteContraria[]) => {
          this.partecontrarias = partecontrarias;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddParteContrariaComponent, {
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadParteContrarias() : null; })
  }

  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeleteParteContrariaComponent, {
      width: '750px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadParteContrarias() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditParteContriaComponent, {
      width: '750px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadParteContrarias() : null; })
  }

  openDialogView(enterAnimationDuration: string, exitAnimationDuration: string, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogViewParteContrariaComponent, {
      width: '750px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadParteContrarias() : null; })
  }

  openDialogLink(enterAnimationDuration: string, exitAnimationDuration: string, id_parte_contraria: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogLinkParteContrariaComponent, {
      width: '350px',
      data: { id: id_parte_contraria, numero_processo: this.linkableData.numero_processo },
      enterAnimationDuration,
      exitAnimationDuration,
    });

  }
}

