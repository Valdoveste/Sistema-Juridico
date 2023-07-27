using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaJuridicoWebAPI.Data;
using SistemaJuridicoWebAPI.Models;
using System;

namespace SistemaJuridicoWebAPI.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class SistemaController : Controller
  {

    private readonly SistemaJuridicoDbContext _sistemaJuridicoDbContext;

    public SistemaController(SistemaJuridicoDbContext sistemaJuridicoDbContext)
    {
      _sistemaJuridicoDbContext = sistemaJuridicoDbContext;
    }

    [HttpGet("processo")]
    public async Task<IActionResult> GetAllProcess()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO.ToListAsync());
    }

    [HttpGet("processo/{id}")]
    public async Task<IActionResult> GetProcess([FromRoute] Guid id)
    {
      var processo = await _sistemaJuridicoDbContext.PROCESSO.FirstOrDefaultAsync(x => x.ID_PROCESSO.Equals(id));
      if (processo == null)
      {
        return NotFound();
      }

      return Ok(processo);

    }

    [HttpPost("add-processo")]
    public async Task<IActionResult> AddProcess([FromBody] PROCESSO processoRequest)
    {
      processoRequest.ID_PROCESSO = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO.AddAsync(processoRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(processoRequest);
    }

    [HttpGet("ambito")]
    public async Task<IActionResult> GetAllAmbito()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_AMBITO.ToListAsync());
    }

    [HttpPost("add-ambito")]
    public async Task<IActionResult> AddAmbito([FromBody] PROCESSO_AMBITO ambitoRequest)
    {
      ambitoRequest.ID = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO_AMBITO.AddAsync(ambitoRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(ambitoRequest);

    }

    [HttpPut("update-ambito/{id}")]
    public async Task<IActionResult> UpdateAmbito([FromRoute] Guid id, PROCESSO_AMBITO updateAmbitoRequest)
    {
      var ambito = await _sistemaJuridicoDbContext.PROCESSO_AMBITO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (ambito == null)
        return NotFound();

      ambito.AMBITO = updateAmbitoRequest.AMBITO;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(ambito);
    }

    [HttpDelete("delete-ambito/{id}")]
    public async Task<IActionResult> DeleteAmbito([FromRoute] Guid id)
    {
      var ambito = await _sistemaJuridicoDbContext.PROCESSO_AMBITO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (ambito == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_AMBITO.Remove(ambito);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(ambito);
    }



    [HttpGet("area-do-direito")]
    public async Task<IActionResult> GetAllAreaDoDireito()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_AREA_DO_DIREITO.ToListAsync());
    }

    [HttpPost("add-area-do-direito")]
    public async Task<IActionResult> AddAreaDoDireito([FromBody] PROCESSO_AREA_DO_DIREITO areaDoDireitoRequest)
    {
      areaDoDireitoRequest.ID = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO_AREA_DO_DIREITO.AddAsync(areaDoDireitoRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(areaDoDireitoRequest);

    }

    [HttpPut("update-area-do-direito/{id}")]
    public async Task<IActionResult> UpdateAreaDoDireito([FromRoute] Guid id, PROCESSO_AREA_DO_DIREITO updateAreaDoDireitoRequest)
    {
      var areaDoDireito = await _sistemaJuridicoDbContext.PROCESSO_AREA_DO_DIREITO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (areaDoDireito == null)
        return NotFound();

      areaDoDireito.AREA_DO_DIREITO = updateAreaDoDireitoRequest.AREA_DO_DIREITO;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(areaDoDireito);
    }

    [HttpDelete("delete-area-do-direito/{id}")]
    public async Task<IActionResult> DeleteAreaDoDireito([FromRoute] Guid id)
    {
      var areaDoDireito = await _sistemaJuridicoDbContext.PROCESSO_AREA_DO_DIREITO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (areaDoDireito == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_AREA_DO_DIREITO.Remove(areaDoDireito);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(areaDoDireito);
    }



    [HttpGet("fase")]
    public async Task<IActionResult> GetAllFase()
    {
      return Ok(await _sistemaJuridicoDbContext.PROCESSO_FASE.ToListAsync());
    }



    [HttpGet("patrono-responsavel")]
    public async Task<IActionResult> GetAllPatronoResponsavel()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_PATRONO_RESPONSAVEL.ToListAsync());
    }

    [HttpPost("add-patrono-responsavel")]
    public async Task<IActionResult> AddPatronoResponsavel([FromBody] PROCESSO_PATRONO_RESPONSAVEL patronoresponsavelRequest)
    {
      patronoresponsavelRequest.ID = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO_PATRONO_RESPONSAVEL.AddAsync(patronoresponsavelRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(patronoresponsavelRequest);
    }

    [HttpPut("update-patrono-responsavel/{id}")]
    public async Task<IActionResult> UpdatePatronoResponsavel([FromRoute] Guid id, PROCESSO_PATRONO_RESPONSAVEL updateFaseRequest)
    {
      var patronoresponsavel = await _sistemaJuridicoDbContext.PROCESSO_PATRONO_RESPONSAVEL.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (patronoresponsavel == null)
        return NotFound();

      patronoresponsavel.PATRONO_RESPONSAVEL = updateFaseRequest.PATRONO_RESPONSAVEL;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(patronoresponsavel);
    }

    [HttpDelete("delete-patrono-responsavel/{id}")]
    public async Task<IActionResult> DeletePatronoResponsavel([FromRoute] Guid id)
    {
      var patronoresponsavel = await _sistemaJuridicoDbContext.PROCESSO_PATRONO_RESPONSAVEL.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (patronoresponsavel == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_PATRONO_RESPONSAVEL.Remove(patronoresponsavel);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(patronoresponsavel);
    }



    [HttpGet("foro-tribunal-orgao")]
    public async Task<IActionResult> GetAllForoTribunalOrgao()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_FORO_TRIBUNAL_ORGAO.ToListAsync());
    }

    [HttpPost("add-foro-tribunal-orgao")]
    public async Task<IActionResult> AddForoTribunalOrgao([FromBody] PROCESSO_FORO_TRIBUNAL_ORGAO foroTribunalOrgaoRequest)
    {
      foroTribunalOrgaoRequest.ID = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO_FORO_TRIBUNAL_ORGAO.AddAsync(foroTribunalOrgaoRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(foroTribunalOrgaoRequest);
    }

    [HttpPut("update-foro-tribunal-orgao/{id}")]
    public async Task<IActionResult> UpdateForoTribunalOrgao([FromRoute] Guid id, PROCESSO_FORO_TRIBUNAL_ORGAO updateForoTribunalOrgaoRequest)
    {
      var foroTribunalOrgao = await _sistemaJuridicoDbContext.PROCESSO_FORO_TRIBUNAL_ORGAO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (foroTribunalOrgao == null)
        return NotFound();

      foroTribunalOrgao.FORO_TRIBUNAL_ORGAO = updateForoTribunalOrgaoRequest.FORO_TRIBUNAL_ORGAO;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(foroTribunalOrgao);
    }

    [HttpDelete("delete-foro-tribunal-orgao/{id}")]
    public async Task<IActionResult> DeleteForoTribunalOrgao([FromRoute] Guid id)
    {
      var foroTribunalOrgao = await _sistemaJuridicoDbContext.PROCESSO_FORO_TRIBUNAL_ORGAO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (foroTribunalOrgao == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_FORO_TRIBUNAL_ORGAO.Remove(foroTribunalOrgao);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(foroTribunalOrgao);
    }



    [HttpGet("motivo-do-encerramento")]
    public async Task<IActionResult> GetAllMotivoDoEncerramento()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_MOTIVO_DO_ENCERRAMENTO.ToListAsync());
    }



    [HttpGet("status")]
    public async Task<IActionResult> GetAllStatus()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_STATUS.ToListAsync());
    }



    [HttpGet("tipo-de-acao")]
    public async Task<IActionResult> GetAllTipoDeAcao()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ACAO.ToListAsync());
    }

    [HttpPost("add-tipo-de-acao")]
    public async Task<IActionResult> AddTipoDeAcao([FromBody] PROCESSO_TIPO_DE_ACAO tipoDeAcaoRequest)
    {
      tipoDeAcaoRequest.ID = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ACAO.AddAsync(tipoDeAcaoRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(tipoDeAcaoRequest);
    }

    [HttpPut("update-tipo-de-acao/{id}")]
    public async Task<IActionResult> UpdateTipoDeAcao([FromRoute] Guid id, PROCESSO_TIPO_DE_ACAO updateTipoDeAcaoRequest)
    {
      var tipoDeAcao = await _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ACAO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (tipoDeAcao == null)
        return NotFound();

      tipoDeAcao.TIPO_DE_ACAO = updateTipoDeAcaoRequest.TIPO_DE_ACAO;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(tipoDeAcao);
    }

    [HttpDelete("delete-tipo-de-acao/{id}")]
    public async Task<IActionResult> DeleteTipoDeAcao([FromRoute] Guid id)
    {
      var tipoDeAcao = await _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ACAO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (tipoDeAcao == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ACAO.Remove(tipoDeAcao);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(tipoDeAcao);
    }




    [HttpGet("tipo-de-andamento")]
    public async Task<IActionResult> GetAllTipoDeAndamento()
    {
      return Ok(await _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ANDAMENTO.ToListAsync());
    }

    [HttpPost("add-tipo-de-andamento")]
    public async Task<IActionResult> AddTipoDeAndamento([FromBody] PROCESSO_TIPO_DE_ANDAMENTO tipoDeAndamentoRequest)
    {
      tipoDeAndamentoRequest.ID = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ANDAMENTO.AddAsync(tipoDeAndamentoRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(tipoDeAndamentoRequest);
    }

    [HttpPut("update-tipo-de-andamento/{id}")]
    public async Task<IActionResult> UpdateTipoDeAndamento([FromRoute] Guid id, PROCESSO_TIPO_DE_ANDAMENTO updateTipoDeAndamentoRequest)
    {
      var tipoDeAndamento = await _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ANDAMENTO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (tipoDeAndamento == null)
        return NotFound();

      tipoDeAndamento.TIPO_DE_ANDAMENTO = updateTipoDeAndamentoRequest.TIPO_DE_ANDAMENTO;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(tipoDeAndamento);
    }

    [HttpDelete("delete-tipo-de-andamento/{id}")]
    public async Task<IActionResult> DeleteTipoDeAndamento([FromRoute] Guid id)
    {
      var tipoDeAndamento = await _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ANDAMENTO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (tipoDeAndamento == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_TIPO_DE_ANDAMENTO.Remove(tipoDeAndamento);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(tipoDeAndamento);
    }




    [HttpGet("vara")]
    public async Task<IActionResult> GetAllVara()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_VARA.ToListAsync());
    }

    [HttpPost("add-vara")]
    public async Task<IActionResult> AddVara([FromBody] PROCESSO_VARA varaRequest)
    {
      varaRequest.ID = Guid.NewGuid();
      await _sistemaJuridicoDbContext.PROCESSO_VARA.AddAsync(varaRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(varaRequest);

    }

    [HttpPut("update-vara/{id}")]
    public async Task<IActionResult> UpdateVara([FromRoute] Guid id, PROCESSO_VARA updateVaraRequest)
    {
      var vara = await _sistemaJuridicoDbContext.PROCESSO_VARA.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (vara == null)
        return NotFound();

      vara.VARA = updateVaraRequest.VARA;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(vara);
    }

    [HttpDelete("delete-vara/{id}")]
    public async Task<IActionResult> DeleteVara([FromRoute] Guid id)
    {
      var vara = await _sistemaJuridicoDbContext.PROCESSO_VARA.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (vara == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_VARA.Remove(vara);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(vara);
    }



    [HttpGet("acordo")]
    public async Task<IActionResult> GetAllAcordo()
    {
      return Ok(await _sistemaJuridicoDbContext.PROCESSO_ACORDO.ToListAsync());
    }

    [HttpGet("processo/all/acordo/{id}")]
    public async Task<IActionResult> GetAllProcessoAcordo([FromRoute] string id)
    {
      var processoAcordo = await _sistemaJuridicoDbContext.PROCESSO_ACORDO
          .Where(x => x.ID_PROCESSO.Equals(id))
          .ToListAsync();

      return Ok(processoAcordo);
    }

    [HttpPost("add-acordo")]
    public async Task<IActionResult> AddAcordo([FromBody] PROCESSO_ACORDO acordoRequest)
    {
      TimeZoneInfo brazilTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Sao_Paulo");

      acordoRequest.ID = Guid.NewGuid();

      acordoRequest.DATA_ACORDO = TimeZoneInfo.ConvertTime(DateTime.Now, brazilTimeZone).ToString();

      await _sistemaJuridicoDbContext.PROCESSO_ACORDO.AddAsync(acordoRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok();
    }

    [HttpGet("andamento")]
    public async Task<IActionResult> GetAllAndamento()
    {
      return Ok(await _sistemaJuridicoDbContext.PROCESSO_ANDAMENTO.ToListAsync());
    }

    [HttpGet("processo/all/andamento/{id}")]
    public async Task<IActionResult> GetAllProcessoAndamento([FromRoute] string id)
    {
      var processoAndamento = await _sistemaJuridicoDbContext.PROCESSO_ANDAMENTO
          .Where(x => x.ID_PROCESSO.Equals(id))
          .ToListAsync();

      return Ok(processoAndamento);
    }

    [HttpGet("processo/andamento/{id}")]
    public async Task<IActionResult> GetProcessoAndamento([FromRoute] Guid id)
    {
      var andamentoRequest = await _sistemaJuridicoDbContext.PROCESSO_ANDAMENTO.FirstOrDefaultAsync(x => x.ID.Equals(id));

      return Ok(andamentoRequest);
    }

    [HttpPost("add-andamento")]
    public async Task<IActionResult> AddAndamento([FromBody] PROCESSO_ANDAMENTO andamentoRequest)
    {
      TimeZoneInfo brazilTimeZone = TimeZoneInfo.FindSystemTimeZoneById("America/Sao_Paulo");

      andamentoRequest.ID = Guid.NewGuid();

      andamentoRequest.DATA_ANDAMENTO = TimeZoneInfo.ConvertTime(DateTime.Now, brazilTimeZone).ToString();

      await _sistemaJuridicoDbContext.PROCESSO_ANDAMENTO.AddAsync(andamentoRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok();
    }

    [HttpGet("parte-contraria")]
    public async Task<IActionResult> GetAllParteContraria() => Ok(await _sistemaJuridicoDbContext.PROCESSO_PARTE_CONTRARIA.ToListAsync());

    [HttpPost("add-parte-contraria")]
    public async Task<IActionResult> AddParteContraria([FromBody] PROCESSO_PARTE_CONTRARIA parteContrariaRequest)
    {
      parteContrariaRequest.ID = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO_PARTE_CONTRARIA.AddAsync(parteContrariaRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(parteContrariaRequest);
    }

    [HttpPut("update-parte-contraria/{id}")]
    public async Task<IActionResult> UpdateParteContraria([FromRoute] Guid id, PROCESSO_PARTE_CONTRARIA updateParteContrariaRequest)
    {
      var parteContraria = await _sistemaJuridicoDbContext.PROCESSO_PARTE_CONTRARIA.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (parteContraria == null)
        return NotFound();

      parteContraria.NOME = updateParteContrariaRequest.NOME;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(parteContraria);
    }

    [HttpDelete("delete-parte-contraria/{id}")]
    public async Task<IActionResult> DeleteParteContraria([FromRoute] Guid id)
    {
      var parteContraria = await _sistemaJuridicoDbContext.PROCESSO_PARTE_CONTRARIA.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (parteContraria == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_PARTE_CONTRARIA.Remove(parteContraria);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(parteContraria);
    }

    [HttpGet("empresas")]
    public async Task<IActionResult> GetAllEmpresas()
    {
      return Ok(await _sistemaJuridicoDbContext.PROCESSO_EMPRESAS.ToListAsync());
    }

    [HttpPost("add-empresas")]
    public async Task<IActionResult> AddEmpresas([FromBody] PROCESSO_EMPRESAS empresasRequest)
    {
      empresasRequest.ID = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO_EMPRESAS.AddAsync(empresasRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(empresasRequest);
    }

    [HttpPut("update-empresas/{id}")]
    public async Task<IActionResult> UpdateEmpresas([FromRoute] Guid id, PROCESSO_EMPRESAS updateEmpresasRequest)
    {
      var empresas = await _sistemaJuridicoDbContext.PROCESSO_EMPRESAS.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (empresas == null)
        return NotFound();

      empresas.EMPRESA = updateEmpresasRequest.EMPRESA;
      empresas.CPF_CNPJ = updateEmpresasRequest.CPF_CNPJ;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(empresas);
    }

    [HttpDelete("delete-empresas/{id}")]
    public async Task<IActionResult> DeleteEmpresas([FromRoute] Guid id)
    {
      var empresas = await _sistemaJuridicoDbContext.PROCESSO_EMPRESAS.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (empresas == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_EMPRESAS.Remove(empresas);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(empresas);
    }


  }
}
