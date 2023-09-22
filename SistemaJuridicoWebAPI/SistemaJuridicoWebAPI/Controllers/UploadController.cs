using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaJuridicoWebAPI.Data;
using System.Net.Http.Headers;

namespace SistemaJuridicoWebAPI.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UploadController : Controller
  {

    private readonly SistemaJuridicoDbContext _sistemaJuridicoDbContext;

    public UploadController(SistemaJuridicoDbContext sistemaJuridicoDbContext)
    {
      _sistemaJuridicoDbContext = sistemaJuridicoDbContext;
    }

    [HttpPost("upload-files/processo/andamento/{id}"), DisableRequestSizeLimit]
    public async Task<IActionResult> UploadFileProcessoAndamento([FromRoute] string id)
    {

      var andamentoID = await _sistemaJuridicoDbContext.PROCESSO_ANDAMENTO
          .Where(x => x.ID_PROCESSO.Equals(id))
          .Select(x => x.ID)
          .FirstOrDefaultAsync();

      try
      {
        var files = Request.Form.Files;
        var folderName = Path.Combine("Resources/" + id.ToString(), andamentoID.ToString());
        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

        if (!Directory.Exists(folderName))
          Directory.CreateDirectory(folderName);

        if (files.Any(file => file.Length == 0))
        {
          return BadRequest();
        }

        foreach (var file in files)
        {
          var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
          var fullPath = Path.Combine(pathToSave, fileName);
          var dbPath = Path.Combine(pathToSave, fileName);

          using (var stream = new FileStream(fullPath, FileMode.Create))
          {
            file.CopyTo(stream);
          }

        }

        return Ok();
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }
  }
}
