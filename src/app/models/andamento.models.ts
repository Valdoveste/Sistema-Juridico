import { Data } from "@angular/router";

export interface Andamento {
  ID_ANDAMENTO: Number;
  ID_USUARIO: Number;
  TIPO_ANDAMENTO: String;
  ANDAMENTO: String;
  RESPONSAVEL: String;
  DATA_ANDAMENTO: Data;
  DATA_CADASTRO: Data;
  ANEXO: [];
}