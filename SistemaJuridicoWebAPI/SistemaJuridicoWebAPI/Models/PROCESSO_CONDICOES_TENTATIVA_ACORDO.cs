using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_CONDICOES_TENTATIVA_ACORDO
    {
        [Key]
        public Guid ID { get; set; }
        public string CONDICOES_TENTATIVA_ACORDO { get; set; }
    }
}
