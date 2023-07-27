import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoEmpresas } from 'src/app/models/PROCESSO_EMPRESAS.model';
import { EmpresasService } from 'src/app/services/empresas.service';

import { DialogAddEmpresasComponent } from './dialog-add-empresas/dialog-add-empresas.component';
import { DialogDeleteEmpresasComponent } from './dialog-delete-empresas/dialog-delete-empresas.component';
import { DialogEditEmpresasComponent } from './dialog-edit-empresas/dialog-edit-empresas.component';

@Component({
  selector: 'app-m-empresas',
  templateUrl: './m-empresas.component.html',
  styleUrls: ['./m-empresas.component.scss'],
})
export class MEmpresasComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private empresasService: EmpresasService
  ) { }

  empresas: ProcessoEmpresas[] = [];

  ngOnInit(): void {
    this.loadEmpresas();
  }

  innerHTMLRow(element: HTMLCollectionOf<Element>){
    return [element[0].innerHTML, element[1].innerHTML]
  }

  loadEmpresas() {
    this.empresasService.getAllEmpresas()
      .subscribe({
        next: (empresas: any) => {
          this.empresas = empresas;
        },
        error: (response: any) => {
          console.log(response);
        }
      });
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddEmpresasComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadEmpresas() : null; });
  }

  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeleteEmpresasComponent, {
      width: '350px',
      data: { empresas_data: this.innerHTMLRow(document.getElementsByClassName(id as string)), id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadEmpresas() : null; });
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditEmpresasComponent, {
      width: '350px',
      data: { empresas_data: this.innerHTMLRow(document.getElementsByClassName(id as string)),  id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadEmpresas() : null; });
  }
}
