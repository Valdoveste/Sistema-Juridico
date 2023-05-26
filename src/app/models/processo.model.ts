export interface Processo {
  ID_PROCESSO: String;
  NUMERO_PROCESSO: string;
  STATUS: String;
  TIPO_DE_ACAO: String;
  AREA_DO_DIREITO: String;
  EMPPRESA: String;
  EMPRESA_CNPJ: String,
  AMBITO: String;
  PARTE_CONTRARIA: String;
  PARTE_CONTRARIA_CNPJ: String;
  PROCESSO_ESTADO: String;
  PROCESSO_CIDADE: String;
  PROCESSO_PAIS: String;
  VARA: String;
  FORO_TRIBUNAL_ORGAO: String;
  FASE: String;
  DATA_DISTRIBUICAO: String;
  DATA_CITACAO: String;
  PATRONO_RESPONSAVEL: String;
  PATRONOS_ANTERIORES: String;
  TEXTO_DO_OBJETO: String;
  VALOR_DO_PEDIDO: String;
  VALOR_INSTANCIA1: Number;
  VALOR_INSTANCIA2: Number;
  VALOR_INSTANCIA3: Number;
  VALOR_INSTANCIA_EXTRAORDINARIA: Number;
  DATA_CADASTRO_PROCESSO: String;
  DATA_ULITMO_PROCESSO: String;
  DATA_ULTIMO_ANDAMENTO: String;
  DATA_ENCERRAMENTO: String;
  MOTIVO_ENCERRAMENTO: String;
  MOTIVO_BAIXA_PROVISORIA: String;
}