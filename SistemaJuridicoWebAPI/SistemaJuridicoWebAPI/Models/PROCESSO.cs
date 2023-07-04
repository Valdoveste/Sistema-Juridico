using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO
    {
        [Key]
        public Guid ID_PROCESSO { get; set; }
        public string NUMERO_PROCESSO { get; set; }
        public string ID_USUARIO { get; set; }
        public string STATUS { get; set; }
        public string TIPO_DE_ACAO { get; set; }
        public string AREA_DO_DIREITO { get; set; }
        public string EMPPRESA { get; set; }
        public string EMPRESA_CNPJ { get; set; }
        public string PROCESSO_ESTADO { get; set; }
        public string PROCESSO_CIDADE { get; set; }
        public string PROCESSO_PAIS { get; set; }
        public string VARA { get; set; }
        public string FORO_TRIBUNAL_ORGAO { get; set; }
        public string FASE { get; set; }
        public string DATA_DISTRIBUICAO { get; set; }
        public string DATA_CITACAO { get; set; }
        public string PATRONO_RESPONSAVEL { get; set; }
        public string PATRONOS_ANTERIORES { get; set; }
        public string TEXTO_DO_OBJETO { get; set; }
        public int VALOR_DO_PEDIDO { get; set; }
        public int VALOR_INSTANCIA1 { get; set; }
        public int VALOR_INSTANCIA2 { get; set; }
        public int VALOR_INSTANCIA3 { get; set; }
        public int VALOR_INSTANCIA_EXTRAORDINARIA { get; set; }
        public string DATA_CADASTRO_PROCESSO { get; set; }
        public string DATA_ULTIMO_ANDAMENTO { get; set; }
        public string MOTIVO_ENCERRAMENTO { get; set; }
        public string MOTIVO_BAIXA_PROVISORIA { get; set; }
        public string PARTE_CONTRARIA_NOME { get; set; }
        public string PARTE_CONTRARIA_NOME_FANTASIA { get; set; }
        public string PARTE_CONTRARIA_CPF { get; set; }
        public string PARTE_CONTRARIA_CNPJ { get; set; }
        public string PARTE_CONTRARIA_RG { get; set; }
        public string PARTE_CONTRARIA_ENDERECO { get; set; }
        public string PARTE_CONTRARIA_CEP { get; set; }
        public int PARTE_CONTRARIA_NUMERO { get; set; }
        public string PARTE_CONTRARIA_COMPLEMENTO { get; set; }
        public string PARTE_CONTRARIA_ESTADO { get; set; }
        public string PARTE_CONTRARIA_CIDADE { get; set; }
        public string PARTE_CONTRARIA_PAIS { get; set; }
        public string PARTE_CONTRARIA_OBSERVACAO { get; set; }
        public string PARTE_CONTRARIA_CARGO { get; set; }
        public string PARTE_CONTRARIA_DATA_ADMISSAO { get; set; }
        public string PARTE_CONTRARIA_DATA_DEMISSAO { get; set; }
        public int PARTE_CONTRARIA_ULTIMO_SALARIO { get; set; }
    }
}
