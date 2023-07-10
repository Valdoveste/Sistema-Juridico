using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_AMBITO
    {
        [Key]
        public Guid ID { get; set; }
        public string AMBITO { get; set; }
    }
}
