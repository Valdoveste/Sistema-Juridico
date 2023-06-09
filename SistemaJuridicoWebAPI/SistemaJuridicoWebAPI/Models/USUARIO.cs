using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;

namespace SistemaJuridicoWebAPI.Models
{
    public class USUARIO
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid ID_USUARIO { get; set; }

        public string NOME_USUARIO { get; set; }

        public string SENHA { get; set; }
    }
}
