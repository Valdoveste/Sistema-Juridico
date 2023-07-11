import { Component, OnInit } from '@angular/core';
import { ProcessCreateComponent } from '../process-create.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-process-create-fisical-person',
  templateUrl: './process-create-fisical-person.component.html',
  styleUrls: ['./process-create-fisical-person.component.scss']
})
export class ProcessCreateFisicalPersonComponent extends ProcessCreateComponent implements OnInit {
  createProcessFisicalPersonForm!: FormGroup;


  override ngOnInit(): void {
    this.createProcessFisicalPersonForm = new FormGroup({
      PARTE_CONTRARIA_NOME: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_CPF: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_RG: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_ENDERECO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_CEP: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_NUMERO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_COMPLEMENTO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_CARGO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_DATA_ADMISSAO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_DATA_DEMISSAO: new FormControl('', [Validators.required]),
      PARTE_CONTRARIA_ULTIMO_SALARIO: new FormControl('', [Validators.required])
    });
  }


}
