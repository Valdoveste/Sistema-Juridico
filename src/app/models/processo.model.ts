export interface Processo {
  ID_PROCESSO: string | String;
  NUMERO_PROCESSO: string | String;
  STATUS: string | String;
  TIPO_DE_ACAO: string | String;
  AREA_DO_DIREITO: string | String;
  EMPRESA: string | String;
  EMPRESA_CNPJ: string;
  AMBITO: string | String;
  PROCESSO_ESTADO: string | String;
  PROCESSO_CIDADE: string | String;
  PROCESSO_PAIS: string | String;
  VARA: string | String;
  FORO_TRIBUNAL_ORGAO: string | String;
  FASE: string | String;
  DATA_DISTRIBUICAO: Date;
  DATA_CITACAO: Date;
  PATRONO_RESPONSAVEL: string | String;
  PATRONOS_ANTERIORES: string | String;
  TEXTO_DO_OBJETO: string | String;
  VALOR_DO_PEDIDO: Number;
  VALOR_INSTANCIA1: Number;
  VALOR_INSTANCIA2: Number;
  VALOR_INSTANCIA3: Number;
  VALOR_INSTANCIA_EXTRAORDINARIA: Number;
  DATA_CADASTRO_PROCESSO: Date;
  DATA_ULTIMO_ANDAMENTO: Date;
  DATA_ENCERRAMENTO: Date;
  MOTIVO_ENCERRAMENTO: string | String;
  MOTIVO_BAIXA_PROVISORIA: string | String;
  PARTE_CONTRARIA_NOME: string | String;
  PARTE_CONTRARIA_NOME_FANTASIA: string | String;
  PARTE_CONTRARIA_CPF: string;
  PARTE_CONTRARIA_CNPJ: string;
  PARTE_CONTRARIA_RG: string | String;
  PARTE_CONTRARIA_ENDERECO: string | String;
  PARTE_CONTRARIA_CEP: string | String;
  PARTE_CONTRARIA_NUMERO: Number;
  PARTE_CONTRARIA_COMPLEMENTO: string | String;
  PARTE_CONTRARIA_ESTADO: string | String;
  PARTE_CONTRARIA_CIDADE: string | String;
  PARTE_CONTRARIA_PAIS: string | String;
  PARTE_CONTRARIA_OBSERVACAO: string | String;
  PARTE_CONTRARIA_CARGO: string | String;
  PARTE_CONTRARIA_DATA_ADMISSAO: Date;
  PARTE_CONTRARIA_DATA_DEMISSAO: Date;
  PARTE_CONTRARIA_ULTIMO_SALARIO: Number;
}