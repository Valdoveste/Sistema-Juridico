using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaJuridicoWebAPI.Models
{
  public class PROCESSO_ACORDO
  {
    [Key]
    public Guid ID { get; set; }
    public string  DATA_ACORDO { get; set; }

    [Column(TypeName = "numeric")]
    [Precision(18, 2)]
    public decimal VALOR_ACORDO { get; set; }
    public string ID_PROCESSO { get; set; }
    public string CRIADOR_ACORDO { get; set; }
    public string CONDICOES_TENTATIVA_DE_ACORDO { get; set; }
  }
}
