import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoAcordo } from '../../../../models/PROCESSO_ACORDO.model'
import { AcordoService } from 'src/app/services/acordo.service';

import { DialogAddAcordoComponent } from './dialog-add-acordo/dialog-add-acordo.component';
import { DialogEditAcordoComponent } from './dialog-edit-acordo/dialog-edit-acordo.component';

import { ActivatedRoute } from '@angular/router';
import { DialogViewAcordoComponent } from './dialog-view-acordo/dialog-view-acordo.component';
import { DialogDeleteAcordoComponent } from './dialog-delete-acordo/dialog-delete-acordo.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-process-area-acordo',
  templateUrl: './process-area-acordo.component.html',
  styleUrls: ['./process-area-acordo.component.scss']
})
export class ProcessAreaAcordoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private acordoService: AcordoService
  ) { }

  idProcesso: any;

  acordos: ProcessoAcordo[] = [];

  ngOnInit(): void {
    this.loadAcordos()
  }

  loadAcordos() {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.idProcesso = params.get('id');
        this.acordoService.getAllProcessoAcordo(this.idProcesso)
          .subscribe({
            next: (response: ProcessoAcordo[]) => {
              this.acordos = response;
            },
            error: (err: HttpErrorResponse) => console.log(err)
          })
      },
      error: (err: HttpErrorResponse) => console.log(err)
    })
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddAcordoComponent, {
      width: '750px',
      data: { id: this.idProcesso },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadAcordos() : null; })
  }

  openDialogView(enterAnimationDuration: string, exitAnimationDuration: string, id: String | undefined): void {
    const dialogRefView = this.dialog.open(DialogViewAcordoComponent, {
      width: '750px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefView.afterClosed().subscribe(result => { result ? this.loadAcordos() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditAcordoComponent, {
      width: '750px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadAcordos() : null; })
  }

  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, id: String | undefined): void {
    const dialogRefDelete = this.dialog.open(DialogDeleteAcordoComponent, {
      width: '750px',
      data: { id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefDelete.afterClosed().subscribe(result => { result ? this.loadAcordos() : null; })
  }
}
