using System.ComponentModel.DataAnnotations;

namespace SistemaJuridicoWebAPI.Models
{
  public class PROCESSO_EMPRESAS
  {
    [Key]
    public Guid ID { get; set; }
    public string EMPRESA { get; set; }
    public string CPF_CNPJ { get; set; }
  }
}
