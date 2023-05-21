import { Data } from "@angular/router";

export interface ParteContraria {
  ID_PARTECONTRARIA: Number;
  PF_PJ: Number;
  NOME: String;
  NOME_FANTASIA: String;
  CPF: String;
  CNPJ: String
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