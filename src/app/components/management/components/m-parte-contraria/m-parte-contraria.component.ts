import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProcessoParteContraria } from 'src/app/models/PROCESSO_PARTE_CONTRARIA.model';
import { ParteContrariaService } from 'src/app/services/parte-contraria.service';

import { DialogAddParteContrariaComponent } from './dialog-add-parte-contraria/dialog-add-parte-contraria.component';
import { DialogDeleteParteContrariaComponent } from './dialog-delete-parte-contraria/dialog-delete-parte-contraria.component';
import { DialogEditParteContriaComponent } from './dialog-edit-parte-contraria/dialog-edit-parte-contraria.component';

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

  personRG: string = '';
  personCPF: string = '';
  personCNPJ: string = '';

  onPersonRGChange() {
    this.personRG = this.personRG.replace(/\D/g, '');
    this.personRG = this.personRG.replace(/(\d{2})(\d)/, '$1.$2');
    this.personRG = this.personRG.replace(/(\d{3})(\d)/, '$1.$2');
    this.personRG = this.personRG.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  onPersonCPFChange() {
    this.personCPF = this.personCPF.replace(/\D/g, '');
    this.personCPF = this.personCPF.replace(/(\d{3})(\d)/, '$1.$2');
    this.personCPF = this.personCPF.replace(/(\d{3})(\d)/, '$1.$2');
    this.personCPF = this.personCPF.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  onPersonCNPJChange() {
    this.personCNPJ = this.personCNPJ.replace(/\D/g, '');
    this.personCNPJ = this.personCNPJ.replace(/(\d{2})(\d)/, '$1.$2');
    this.personCNPJ = this.personCNPJ.replace(/(\d{3})(\d)/, '$1.$2');
    this.personCNPJ = this.personCNPJ.replace(/(\d{3})(\d)/, '$1/$2');
    this.personCNPJ = this.personCNPJ.replace(/(\d{4})(\d)/, '$1-$2');
  }

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
    let teste = document.getElementsByClassName(id as string);
    console.log(teste)
    const dialogRefEdit = this.dialog.open(DialogEditParteContriaComponent, {
      width: '750px',
      data: { value: document.getElementsByClassName(id as string), id: id },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRefEdit.afterClosed().subscribe(result => { result ? this.loadParteContrarias() : null; })
  }
}
