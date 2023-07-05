using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaJuridicoWebAPI.Data;
using SistemaJuridicoWebAPI.Models;
using System.Reflection.Metadata.Ecma335;

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

    [HttpGet("condicoes-tentativa-acordo")]
    public async Task<IActionResult> GetAllCondicoesTentivaAcordo()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_CONDICOES_TENTATIVA_ACORDO.ToListAsync());
    }


    [HttpGet("fase")]
    public async Task<IActionResult> GetAllFase()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_FASE.ToListAsync());
    }

    [HttpPost("add-fase")]
    public async Task<IActionResult> AddFase([FromBody] PROCESSO_FASE faseRequest)
    {
      faseRequest.ID = Guid.NewGuid();

      await _sistemaJuridicoDbContext.PROCESSO_FASE.AddAsync(faseRequest);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(faseRequest);
    }

    [HttpPut("update-fase/{id}")]
    public async Task<IActionResult> UpdateFase([FromRoute] Guid id, PROCESSO_FASE updateFaseRequest)
    {
      var fase = await _sistemaJuridicoDbContext.PROCESSO_FASE.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (fase == null)
        return NotFound();

      fase.FASE = updateFaseRequest.FASE;

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(fase);
    }

    [HttpDelete("delete-fase/{id}")]
    public async Task<IActionResult> DeleteFase([FromRoute] Guid id)
    {
      var fase = await _sistemaJuridicoDbContext.PROCESSO_FASE.FirstOrDefaultAsync(x => x.ID.Equals(id));

      if (fase == null)
        return NotFound();

      _sistemaJuridicoDbContext.PROCESSO_FASE.Remove(fase);

      await _sistemaJuridicoDbContext.SaveChangesAsync();

      return Ok(fase);
    }



    [HttpGet("foro-tribunal-orgao")]
    public async Task<IActionResult> GetAllForoTribunalOrgao()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_FORO_TRIBUNAL_ORGAO.ToListAsync());
    }

    [HttpGet("motivo-do-encerramento")]
    public async Task<IActionResult> GetAllMotivoDoEncerramento()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_MOTIVO_DO_ENCERRAMENTO.ToListAsync());
    }

    [HttpGet("patrono-responsavel")]
    public async Task<IActionResult> GetAllPatronoResponsavel()
    {

      return Ok(await _sistemaJuridicoDbContext.PROCESSO_PATRONO_RESPONSAVEL.ToListAsync());
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
  }
}
