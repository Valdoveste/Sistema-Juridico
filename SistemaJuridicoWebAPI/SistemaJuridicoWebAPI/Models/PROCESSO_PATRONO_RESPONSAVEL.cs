using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_PATRONO_RESPONSAVEL
    {
        [Key]
        public Guid ID { get; set; }
        public string PATRONO_RESPONSAVEL { get ; set; }
        public string  PATRONO_RESPONSAVEL_CPF_CNPJ { get; set; }
    }
}
