using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaJuridicoWebAPI.Models
{
  public class PROCESSO
  {
    [Key]
    public Guid ID_PROCESSO { get; set; }
    public string NUMERO_PROCESSO { get; set; }
    public string ID_USUARIO { get; set; }
    public string STATUS { get; set; }
    public string TIPO_DE_ACAO { get; set; }
    public string AMBITO { get; set; }
    public string AREA_DO_DIREITO { get; set; }
    public string EMPRESA { get; set; }
    public string EMPRESA_CNPJ { get; set; }
    public string ESTADO { get; set; }
    public string CIDADE { get; set; }
    public string PAIS { get; set; }
    public string VARA { get; set; }
    public string FORO_TRIBUNAL_ORGAO { get; set; }
    public string FASE { get; set; }
    public string DATA_DISTRIBUICAO { get; set; }
    public string DATA_CITACAO { get; set; }
    public string PATRONO_RESPONSAVEL { get; set; }
    public string PATRONOS_ANTERIORES { get; set; }
    public string TEXTO_DO_OBJETO { get; set; }

    [Column(TypeName = "numeric")]
    [Precision(18, 2)]
    public decimal VALOR_DO_PEDIDO { get; set; }

    [Column(TypeName = "numeric")]
    [Precision(18, 2)]
    public decimal VALOR_INSTANCIA1 { get; set; }

    [Column(TypeName = "numeric")]
    [Precision(18, 2)]
    public decimal VALOR_INSTANCIA2 { get; set; }

    [Column(TypeName = "numeric")]
    [Precision(18, 2)]
    public decimal VALOR_INSTANCIA3 { get; set; }

    [Column(TypeName = "numeric")]
    [Precision(18, 2)]
    public decimal VALOR_INSTANCIA_EXTRAORDINARIA { get; set; }

    public string DATA_CADASTRO_PROCESSO { get; set; }
    public string DATA_ULTIMO_ANDAMENTO { get; set; }
    public string MOTIVO_ENCERRAMENTO { get; set; }
    public string MOTIVO_BAIXA_PROVISORIA { get; set; }
  }
}
