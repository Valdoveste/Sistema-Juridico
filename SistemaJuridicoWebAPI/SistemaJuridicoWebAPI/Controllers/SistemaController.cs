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

        // GET

        [HttpGet]
        public async Task<IActionResult> GetAllProcess()
        {

            return Ok(await _sistemaJuridicoDbContext.PROCESSO.ToListAsync());
        }

        [HttpGet]
        public async Task<IActionResult> AddAcordo()
        {

          return Ok(await _sistemaJuridicoDbContext.ACORDO.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> AddProcess([FromBody] PROCESSO processoRequest)
        {
            processoRequest.ID_PROCESSO = Guid.NewGuid();

            await _sistemaJuridicoDbContext.PROCESSO.AddAsync(processoRequest);

            await _sistemaJuridicoDbContext.SaveChangesAsync();

            return Ok(processoRequest);
        }


        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetProcess([FromRoute]Guid id)
        {
          var processo = await  _sistemaJuridicoDbContext.PROCESSO.FirstOrDefaultAsync(x => x.ID_PROCESSO.Equals(id));
            if(processo == null)
            {
                return NotFound();
            }

            return Ok(processo);

        }
    }
}
