using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
    public class PROCESSO_AREA_DO_DIREITO
    {
        [Key]
        public Guid ID { get; set; }
        public string AREA_DO_DIREITO { get; set; }
    }
}
