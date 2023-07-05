using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_MOTIVO_DO_ENCERRAMENTO
    {
        [Key]
        public Guid ID { get; set; }
        public string MOTIVO_DO_ENCERRAMENTO { get; set; }
    }
}
