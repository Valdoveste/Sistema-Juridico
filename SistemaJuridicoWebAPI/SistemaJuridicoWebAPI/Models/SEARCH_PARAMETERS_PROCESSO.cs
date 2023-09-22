namespace SistemaJuridicoWebAPI.Models
{
  public class SEARCH_PARAMETERS_PROCESSO
  {
    private string nUMERO_PROCESSO;

    public string? NUMERO_PROCESSO { get => nUMERO_PROCESSO; set => nUMERO_PROCESSO = value; }
    public string? FASE { get; set; }
    public string? AREA_DO_DIREITO { get; set; }
    public string? PATRONO_RESPONSAVEL { get; set; }
    public string? STATUS { get; set; }
    public string? TIPO_DE_ACAO { get; set; }
    public string? PARTE_CONTRARIA { get; set; }
  }
}
