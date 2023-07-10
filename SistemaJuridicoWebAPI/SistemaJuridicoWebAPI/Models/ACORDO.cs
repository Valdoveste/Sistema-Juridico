using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaJuridicoWebAPI.Models
{
    public class ACORDO
    {
        [Key]
        public Guid ID_ACORDO { get; set; }

        public string ID_USUARIO { get; set; }

        public string DATA_TENTATIVA { get; set; }

        public int VALOR_TENTATIVA { get; set; }

        public string CONDICOES_TENTATIVA { get; set; }
    }
}
