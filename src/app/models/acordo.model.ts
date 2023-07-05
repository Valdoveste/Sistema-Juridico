import { Data } from "@angular/router";

export interface Acordo {
  ID_ACORDO?: String;
  ID_USUARIO: Number;
  DATA_TENTATIVA: Data;
  VALOR_TENTATIVA: Number;
  CODICOES_TENTATIVA: String;
}