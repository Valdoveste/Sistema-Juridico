using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
  public class PROCESSO_PATRONOS_ANTERIORES
  {
    [Key]
    public Guid ID { get; set; }
    public string ID_PROCESSO { get; set; }
    public string ID_USUARIO { get; set; }
    public string NOME_USUARIO { get; set; }
    public string PATRONO_RESPONSAVEL_ATUAL { get; set; }
    public string PATRONO_RESPONSAVEL_CPF_CNPJ_ATUAL { get; set; }
    public string DATA_ALTERACAO { get; set; }
  }
}
