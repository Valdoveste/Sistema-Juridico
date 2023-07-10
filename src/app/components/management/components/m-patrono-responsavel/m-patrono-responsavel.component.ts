import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoPatronoResponsavel } from 'src/app/models/PROCESSO_PATRONORESPONSAVEL.model';
import { PatronoResponsavelService } from 'src/app/services/patrono-responsavel.service';

import { DialogAddPatronoResponsavelComponent } from './dialog-add-patrono-responsavel/dialog-add-patrono-responsavel.component';
import { DialogDeletePatronoResponsavelComponent } from './dialog-delete-patrono-responsavel/dialog-delete-patrono-responsavel.component';
import { DialogEditPatronoResponsavelComponent } from './dialog-edit-patrono-responsavel/dialog-edit-patrono-responsavel.component';

@Component({
  selector: 'app-m-patrono-responsavel',
  templateUrl: './m-patrono-responsavel.component.html',
  styleUrls: ['./m-patrono-responsavel.component.scss'],
})
export class MPatronoResponsavelComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private patronoResponsavelService: PatronoResponsavelService
  ) { }

  patronoResponsaveis: ProcessoPatronoResponsavel[] = [];

  ngOnInit(): void {
    this.loadPatronoResponsaveis();
  }

  loadPatronoResponsaveis() {
    this.patronoResponsavelService.getAllPatronoResponsavel()
      .subscribe({
        next: (patronoResponsaveis: ProcessoPatronoResponsavel[]) => {
          this.patronoResponsaveis = patronoResponsaveis;
        },
        error: (response: any) => {
          console.log(response);
        }
      });
  }

  openDialogAdd(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRefAdd = this.dialog.open(DialogAddPatronoResponsavelComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefAdd.afterClosed().subscribe(result => { result ? this.loadPatronoResponsaveis() : null; });
  }

  openDialogRemove(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefRemove = this.dialog.open(DialogDeletePatronoResponsavelComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.previousElementSibling?.innerHTML, id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefRemove.afterClosed().subscribe(result => { result ? this.loadPatronoResponsaveis() : null; });
  }

  openDialogEdit(enterAnimationDuration: string, exitAnimationDuration: string, event: Event, id: String | undefined): void {
    const dialogRefEdit = this.dialog.open(DialogEditPatronoResponsavelComponent, {
      width: '350px',
      data: { value: (event.currentTarget as HTMLElement).previousElementSibling?.innerHTML, id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadPatronoResponsaveis() : null; });
  }
}
