using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
  public class PROCESSO_TIPO_DE_ANDAMENTO
  {
    [Key]
    public Guid ID { get; set; }
    public string TIPO_DE_ANDAMENTO { get; set; }
  }
}
