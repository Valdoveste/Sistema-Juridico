using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_FORO_TRIBUNAL_ORGAO
    {
        [Key]
        public Guid ID { get; set; }
        public string FORO_TRIBUNAL_ORGAO { get; set; }   
    }
}
