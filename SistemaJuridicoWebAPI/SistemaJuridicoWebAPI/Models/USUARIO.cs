using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;

namespace SistemaJuridicoWebAPI.Models
{
    public class USUARIO
    {
        [Key]
        public Guid ID_USUARIO { get; set; }

        public string NOME_USUARIO { get; set; }

        public string SENHA { get; set; }

        public int ACESSO_GESTAO { get; set; }
    }
}
