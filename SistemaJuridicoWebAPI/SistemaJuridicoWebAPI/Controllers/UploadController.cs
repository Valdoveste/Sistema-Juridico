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

    [HttpPost("upload-files/processo/andamento/{ID_PROCESSO}"), DisableRequestSizeLimit]
    public async Task<IActionResult> UploadFileProcessoAndamento([FromRoute] string ID_PROCESSO)
    {

      var andamentoID = await _sistemaJuridicoDbContext.PROCESSO_ANDAMENTO
          .Where(x => x.ID_PROCESSO.Equals(ID_PROCESSO))
          .Select(x => x.ID)
          .FirstOrDefaultAsync();

      try
      {
        var files = Request.Form.Files;
        var folderName = Path.Combine("Resources/" + ID_PROCESSO.ToString(), andamentoID.ToString());
        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

        if (!Directory.Exists(folderName))
          Directory.CreateDirectory(folderName);

        if (files.Any(file => file.Length == 0))
          return BadRequest();

        foreach (var file in files)
        {
          var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
          var fullPath = Path.Combine(pathToSave, fileName);
          var dbPath = Path.Combine(pathToSave, fileName);

          using (var stream = new FileStream(fullPath, FileMode.Create))
            file.CopyTo(stream);
        }

        return Ok();
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }

    [HttpDelete("delete-file/processo/andamento/{ID_PROCESSO}/{fileName}")]
    public async Task<IActionResult> DeleteFileProcessoAndamento([FromRoute] string ID_PROCESSO, [FromRoute] string fileName)
    {
      var andamentoID = await _sistemaJuridicoDbContext.PROCESSO_ANDAMENTO
          .Where(x => x.ID_PROCESSO.Equals(ID_PROCESSO))
          .Select(x => x.ID)
          .FirstOrDefaultAsync();
      try
      {
        var folderName = Path.Combine("Resources/" + ID_PROCESSO.ToString(), andamentoID.ToString());

        List<string> filesNames = new List<string>();

        if (Directory.Exists(folderName))
        {
          string[] filePaths = Directory.GetFiles(folderName);

          foreach (string filePath in filePaths)
            filesNames.Add(Path.GetFileName(filePath));

          foreach (string filePath in filePaths)
            if (fileName == Path.GetFileName(filePath))
            { 
              System.IO.File.Delete(filePath);
              filesNames.Remove(Path.GetFileName(filePath));
              return Ok(filesNames);
            }
          return BadRequest("File not found in folder");
        }

        return BadRequest("Internal server error: Folder does not exist.");
      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }

    [HttpGet("get-files/processo/andamento/{ID_ANDAMENTO}")]
    public async Task<IActionResult> GetFileProcessoAndamento([FromRoute] Guid ID_ANDAMENTO)
    {
      var andamentoRequest = await _sistemaJuridicoDbContext.PROCESSO_ANDAMENTO
        .FirstOrDefaultAsync(x => x.ID.Equals(ID_ANDAMENTO));

      //340794ff-4187-4d24-b865-6a19060fdb18

      try
      {
        var folderName = Path.Combine("Resources/" + andamentoRequest.ID_PROCESSO, ID_ANDAMENTO.ToString());

        List<string> filesNames = new List<string>();

        if (Directory.Exists(folderName))
        {
          string[] filePaths = Directory.GetFiles(folderName);

          foreach (string filePath in filePaths)
            filesNames.Add(Path.GetFileName(filePath));

          return Ok(filesNames);
        }

        return BadRequest("Err: Folder does not exist.");

      }
      catch (Exception ex)
      {
        return StatusCode(500, $"Internal server error: {ex}");
      }
    }
  }
}
