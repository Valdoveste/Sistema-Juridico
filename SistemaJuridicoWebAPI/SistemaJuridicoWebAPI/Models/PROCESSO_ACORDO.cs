using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
  public class PROCESSO_ACORDO
  {
    [Key]
    public Guid ID { get; set; }
    public string DATA_ACORDO { get; set; }
    public int VALOR_ACORDO { get; set; }
    public string ID_PROCESSO { get; set; }
    public string CRIADOR_ACORDO { get; set; }
    public string CONDICOES_TENTATIVA_DE_ACORDO { get; set; }
  }
}
