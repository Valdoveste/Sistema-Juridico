import { Component, OnInit } from '@angular/core';
import { ProcessCreateComponent } from '../process-create.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-process-create-legal-person',
  templateUrl: './process-create-legal-person.component.html',
  styleUrls: ['./process-create-legal-person.component.scss']
})
export class ProcessCreateLegalPersonComponent extends ProcessCreateComponent implements OnInit {
  createProcessLegalPersonForm!: FormGroup;

  override ngOnInit(): void {
    this.createProcessLegalPersonForm = new FormGroup({
      PARTE_CONTRARIA_CNPJ: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_OBSERVACAO: new FormControl('',),
      PARTE_CONTRARIA_NOME: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_NOME_FANTASIA: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_ENDERECO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_CEP: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_NUMERO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_COMPLEMENTO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_ESTADO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_PAIS: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_CIDADE: new FormControl('', [Validators.required]),
    });
  }
}
