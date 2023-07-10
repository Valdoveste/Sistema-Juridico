using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_TIPO_DE_ACAO
    {
        [Key]
        public Guid ID { get; set; }
        public string TIPO_DE_ACAO { get; set; }
    }
}
