import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ProcessoAndamento } from '../../../../../models/PROCESSO_ANDAMENTO.model'
import { AndamentoService } from 'src/app/services/andamento.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoDeAndamentoService } from 'src/app/services/tipo-de-andamento.service';
import { ProcessoTipoDeAndamento } from 'src/app/models/PROCESSO_TIPO_DE_ANDAMENTO.model';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dialog-add-andamento',
  templateUrl: './dialog-add-andamento.component.html',
  styleUrls: ['./dialog-add-andamento.component.scss']
})
export class DialogAddAndamentoComponent implements OnInit {
  filesCount: number | string = "Nenhum arquivo selecionado";
  formData = new FormData();
  @Output() public onUploadFinished = new EventEmitter();

  constructor(
    @Inject(MAT_DIALOG_DATA) public addData: any,
    private andamentoService: AndamentoService,
    private tipoDeAndamentoService: TipoDeAndamentoService,
    public dialogRef: MatDialogRef<DialogAddAndamentoComponent>
  ) { }

  tiposAndamentos: ProcessoTipoDeAndamento[] = [];

  createAndamentoForm!: FormGroup;

  createAndamentoRequest: ProcessoAndamento = {
    ID: '',
    TIPO_DE_ANDAMENTO: '',
    DATA_ANDAMENTO: '',
    ID_PROCESSO: '',
    CRIADOR_ANDAMENTO: '',
    DESC_ANDAMENTO: '',
    DATA_CADASTRO: '',
  }

  ngOnInit(): void {

    this.tipoDeAndamentoService.getAllTipoDeAndamento()
      .subscribe({
        next: (response) => {
          this.tiposAndamentos = response;
        },
        error: (response) => {
          console.log(response)
        }
      })

    this.createAndamentoForm = new FormGroup({
      DESC_ANDAMENTO: new FormControl('', [Validators.required]),
      TIPO_DE_ANDAMENTO: new FormControl('', [Validators.required])
    });
  }

  uploadFile = (files: any) => {
    if (files.lenght === 0)
      return;

    let filesToUpload: File[] = files;
    this.filesCount = filesToUpload.length + " arquivo(s) selecionado(s)";

    Array.from(filesToUpload).map((file, index) => {
      return this.formData.append('file' + index, file, file.name);
    });
  }

  createAndamento() {
    if (this.createAndamentoForm.valid) {
      this.andamentoService.createAndamento(this.createAndamentoRequest, this.addData.id)
        .subscribe({
          next: () => {
            this.andamentoService.uploadFileProcessoAndamento(this.formData, this.addData.id)
              .subscribe({
                next: (response) => {
                  console.log(response)
                },
                error: (err: HttpErrorResponse) => console.log(err)
              });
            this.dialogRef.close(true);
          },
          error: (err: HttpErrorResponse) => console.log(err)
        });
    }
    return;
  }
}
