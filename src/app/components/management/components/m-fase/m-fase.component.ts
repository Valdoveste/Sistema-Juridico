import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoFase } from 'src/app/models/PROCESSO_FASE.model';
import { FaseService } from 'src/app/services/fase.service';

import { DialogAddFaseComponent } from './dialog-add-fase/dialog-add-fase.component';
import { DialogDeleteFaseComponent } from './dialog-delete-fase/dialog-delete-fase.component';
import { DialogEditFaseComponent } from './dialog-edit-fase/dialog-edit-fase.component';

@Component({
  selector: 'app-m-fase',
  templateUrl: './m-fase.component.html',
  styleUrls: ['./m-fase.component.scss'],
})
export class MFaseComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private faseService: FaseService
  ) { }

  fases: ProcessoFase[] = [];

  ngOnInit(): void {
    this.loadFases();
  }

  loadFases() {
    this.faseService.getAllFase()
      .subscribe({
        next: (fases: ProcessoFase[]) => {
          this.fases = fases;
        },
        error: (response: any) => {
          console.log(response);
        }
      });
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddFaseComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadFases() : null; });
  }

  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeleteFaseComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.previousElementSibling?.innerHTML, id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadFases() : null; });
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditFaseComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadFases() : null; });
  }
}
