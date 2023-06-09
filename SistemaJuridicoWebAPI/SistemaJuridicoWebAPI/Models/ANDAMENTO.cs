using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaJuridicoWebAPI.Models
{
    public class ANDAMENTO
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID_ANDAMENTO { get; set; }

        public string ID_USUARIO { get; set; }
        
        public string TIPO_ANDAMENTO { get; set; }

        public string INFO_ANDAMENTO { get; set; }

        public string RESPONSAVEL { get; set; }

        public string DATA_ANDAMENTO { get; set; }

        public string DATA_CADASTRO { get; set; } 

        public string ANEXO { get; set; }

    }
}
