import { Data } from "@angular/router";

export interface ParteContraria {
  PF_PJ: Number;
  NOME: String;
  NOME_FANTASIA: String;
  CPF: String;
  CNPJF: String
  RG: String;
  ENDERECO: String;
  CEP: String;
  NUMERO: String;
  COMPLEMENTO: String;
  ESTADO: String;
  PAIS: String;
  OBSERVACAO: String;
  CARGO: String;
  DATA_ADMISSAO: Data;
  DATA_DEMISSAO: Data
  ULTIMO_SALARIO: Number;
}