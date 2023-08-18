import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoAcordo } from '../../../../models/PROCESSO_ACORDO.model'
import { AcordoService } from 'src/app/services/acordo.service';

import { DialogAddAcordoComponent } from './dialog-add-acordo/dialog-add-acordo.component';
import { DialogEditAcordoComponent } from './dialog-edit-acordo/dialog-edit-acordo.component';

import { ActivatedRoute } from '@angular/router';
import { DialogViewAcordoComponent } from './dialog-view-acordo/dialog-view-acordo.component';

@Component({
  selector: 'app-process-area-acordo',
  templateUrl: './process-area-acordo.component.html',
  styleUrls: ['./process-area-acordo.component.scss']
})
export class ProcessAreaAcordoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
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
            next: (response) => {
              this.acordos = response.sort((a, b) => b.DATA_ACORDO.localeCompare(a.DATA_ACORDO));
            },
            error: (response) => {
              console.log(response)
            }
          })
      },
      error: (response) => {
        console.log(response)
      }
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

  openDialogView(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogViewAcordoComponent, {
      width: '750px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadAcordos() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditAcordoComponent, {
      width: '750px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadAcordos() : null; })
  }
}
