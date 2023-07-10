import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoVara } from 'src/app/models/PROCESSO_VARA.model';
import { VaraService } from 'src/app/services/vara.service';

import { DialogAddVaraComponent } from './dialog-add-vara/dialog-add-vara.component';
import { DialogDeleteVaraComponent } from './dialog-delete-vara/dialog-delete-vara.component';
import { DialogEditVaraComponent } from './dialog-edit-vara/dialog-edit-vara.component';

@Component({
  selector: 'app-m-vara',
  templateUrl: './m-vara.component.html',
  styleUrls: ['./m-vara.component.scss'],
})

export class MVaraComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private VaraService: VaraService
  ) { }

  varas: ProcessoVara[] = [];

  ngOnInit(): void {
    this.loadVaras();
  }

  loadVaras() {
    this.VaraService.getAllVara()
      .subscribe({
        next: (varas: any) => {
          this.varas = varas;
        },
        error: (response: any) => {
          console.log(response)
        }
      })
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddVaraComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadVaras() : null; })
  }


  openDialogDelete(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefDelete = this.dialog.open(DialogDeleteVaraComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefDelete.afterClosed().subscribe(result => { result ? this.loadVaras() : null; })
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditVaraComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadVaras() : null; })
  }
}
