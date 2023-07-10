using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_FASE
    {
        [Key]
        public Guid ID { get; set; }
        public string FASE { get; set; }
    }
}
