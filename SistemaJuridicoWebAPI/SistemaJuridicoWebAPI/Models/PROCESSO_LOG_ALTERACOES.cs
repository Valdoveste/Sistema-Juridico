using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
  public class PROCESSO_LOG_ALTERACOES
  {
    [Key]
    public Guid ID { get; set; }
    public string ID_PROCESSO { get; set; }
    public string ID_USUARIO { get; set; }
    public string NOME_USUARIO { get; set; }
    public string VALOR_ORIGINAL { get; set; }
    public string VALOR_ATUAL { get; set; }
    public string INPUT_ALTERADO { get; set; }
    public string DATA_ALTERACAO { get; set; }
  }
}
