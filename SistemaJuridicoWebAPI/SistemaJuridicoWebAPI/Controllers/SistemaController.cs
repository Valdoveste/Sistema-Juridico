using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaJuridicoWebAPI.Data;
using SistemaJuridicoWebAPI.Models;

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
