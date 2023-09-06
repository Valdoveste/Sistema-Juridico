using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;

namespace SistemaJuridicoWebAPI.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class UploadController : Controller
  {
    [HttpPost("upload-files/processo/andamento/{id}"), DisableRequestSizeLimit]
    public Task<IActionResult> UploadFileProcessoAndamento([FromRoute] Guid id)
    {
      try
      {
        var files = Request.Form.Files;
        var folderName = Path.Combine("Resources", id.ToString());
        var pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

        if (!Directory.Exists(folderName))
          Directory.CreateDirectory(folderName);

        if (files.Any(file => file.Length == 0))
        {
          return Task.FromResult<IActionResult>(BadRequest());
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

        return Task.FromResult<IActionResult>(Ok());
      }
      catch (Exception ex)
      {
        return Task.FromResult<IActionResult>(StatusCode(500, $"Internal server error: {ex}"));
      }
    }
  }
}
