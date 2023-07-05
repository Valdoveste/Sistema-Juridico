import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoAreaDoDireito } from 'src/app/models/PROCESSO_AREA_DO_DIREITO.model';
import { AreaDoDireitoService } from 'src/app/services/area-do-direito.service';

import { DialogAddAreaDoDireitoComponent } from './dialog-add-area-do-direito/dialog-add-area-do-direito.component';
import { DialogDeleteAreaDoDireitoComponent } from './dialog-delete-area-do-direito/dialog-delete-area-do-direito.component';
import { DialogEditAreaDoDireitoComponent } from './dialog-edit-area-do-direito/dialog-edit-area-do-direito.component';

@Component({
  selector: 'app-m-area-do-direito',
  templateUrl: './m-area-do-direito.component.html',
  styleUrls: ['./m-area-do-direito.component.scss'],
})
export class MAreaDoDireitoComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private areaDoDireitoService: AreaDoDireitoService
  ) { }

  areasDoDireito: ProcessoAreaDoDireito[] = [];

  ngOnInit(): void {
    this.loadAreasDoDireito();
  }

  loadAreasDoDireito() {
    this.areaDoDireitoService.getAllAreaDoDireito()
      .subscribe({
        next: (areasDoDireito: any) => {
          this.areasDoDireito = areasDoDireito;
        },
        error: (response: any) => {
          console.log(response)
        }
      })
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddAreaDoDireitoComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadAreasDoDireito() : null; })
  }


  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeleteAreaDoDireitoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadAreasDoDireito() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditAreaDoDireitoComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadAreasDoDireito() : null; })
  }
}
