import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';

import { DialogAddParteContrariaComponent } from './dialog-add-parte-contraria/dialog-add-parte-contraria.component';
import { DialogDeleteParteContrariaComponent } from './dialog-delete-parte-contraria/dialog-delete-parte-contraria.component';
import { DialogEditParteContriaComponent } from './dialog-edit-parte-contraria/dialog-edit-parte-contraria.component';
import { DialogViewParteContrariaComponent } from './dialog-view-parte-contraria/dialog-view-parte-contraria.component';

@Component({
  selector: 'app-m-parte-contraria',
  templateUrl: './m-parte-contraria.component.html',
  styleUrls: ['./m-parte-contraria.component.scss'],
})
export class MParteContrariaComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    protected ParteContrariaService: ParteContrariaService
  ) { }

  partecontrarias: ProcessoParteContraria[] = [];

  ngOnInit(): void {
    this.loadParteContrarias();
  }

  loadParteContrarias() {
    this.ParteContrariaService.getAllParteContraria()
      .subscribe({
        next: (partecontrarias: any) => {
          this.partecontrarias = partecontrarias;
        },
        error: (response: any) => {
          console.log(response)
        }
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

  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeleteParteContrariaComponent, {
      width: '750px',
      data: { value: document.getElementsByClassName(id as string), id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadParteContrarias() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    Array.from(document.getElementsByClassName(id as string)).forEach(
      function (element, index, array) {
        console.log(element.innerHTML)
      }
    )

    const dialogRefEdit = this.dialog.open(DialogEditParteContriaComponent, {
      width: '750px',
      data: { value: document.getElementsByClassName(id as string), id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadParteContrarias() : null; })
  }

  openDialogView(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogViewParteContrariaComponent, {
      height: '600px',
      width: '750px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadParteContrarias() : null; })
  }
}
