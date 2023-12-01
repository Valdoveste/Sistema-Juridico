import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoAmbito } from 'src/app/models/PROCESSO_AMBITO.model';
import { AmbitoService } from 'src/app/services/ambito.service';

import { DialogAddAmbitoComponent } from './dialog-add-ambito/dialog-add-ambito.component';
import { DialogDeleteAmbitoComponent } from './dialog-delete-ambito/dialog-delete-ambito.component';
import { DialogEditAmbitoComponent } from './dialog-edit-ambito/dialog-edit-ambito.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-m-ambito',
  templateUrl: './m-ambito.component.html',
  styleUrls: ['./m-ambito.component.scss'],
})
export class MAmbitoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private AmbitoService: AmbitoService
  ) { }

  ambitos: ProcessoAmbito[] = [];

  ngOnInit(): void {
    this.loadAmbitos();
  }

  loadAmbitos() {
    this.AmbitoService.getAllAmbito()
      .subscribe({
        next: (ambitos: ProcessoAmbito[]) => {
          this.ambitos = ambitos;
        },
        error: (err: HttpErrorResponse) => console.log(err)
      })
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddAmbitoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadAmbitos() : null; })
  }


  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeleteAmbitoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadAmbitos() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditAmbitoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadAmbitos() : null; })
  }
}
