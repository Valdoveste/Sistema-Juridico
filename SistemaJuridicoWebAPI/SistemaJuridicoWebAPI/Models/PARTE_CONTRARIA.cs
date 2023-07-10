using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaJuridicoWebAPI.Models
{
    public class PARTE_CONTRARIA
    {
        [Key]
        public Guid ID_PARTECONTRARIA { get; set; }

        public int PF_PJ { get; set; }

        public string NOME { get; set; }

        public string NOME_FANTASIA { get; set; }

        public string CPF { get; set; }

        public string CNPJ { get; set; }

        public string RG { get; set; }

        public string ENDERECO { get; set; }

        public string CEP { get; set; }

        public string NUMERO { get; set; }

        public string COMPLEMENTO { get; set; }

        public string ESTADO { get; set; }

        public string CIDADE { get; set; }

        public string PAIS { get; set; }

        public string OBSERVACAO { get; set; }

        public string CARGO { get; set; }

        public string DATA_ADMISSAO { get; set; }

        public string DATA_DEMISSAO { get; set; }

        public int ULTIMO_SALARIO { get; set; }
    }
}
