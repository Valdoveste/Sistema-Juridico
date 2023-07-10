using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_STATUS
    {
        [Key]
        public Guid ID { get; set; }
        public string STATUS { get; set; }
    }
}
