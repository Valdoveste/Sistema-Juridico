namespace SistemaJuridicoWebAPI.Models
{
  public class PROCESSO_ANDAMENTO
  {
    public Guid? ID { get; set; }
    public string TIPO_DE_ANDAMENTO { get; set; }
    public string DATA_ANDAMENTO { get; set; }
    public string DATA_CADASTRO { get; set; }
    public string ID_PROCESSO { get; set; }
    public string CRIADOR_ANDAMENTO { get; set; }
    public string DESC_ANDAMENTO { get; set; }
  }
}
