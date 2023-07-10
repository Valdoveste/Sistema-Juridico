using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_VARA
    {
        [Key]
        public Guid ID { get; set; }
        public string VARA { get; set; }
    }
}
