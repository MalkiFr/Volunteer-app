using Microsoft.AspNetCore.Mvc;
using server.Models;
using server.Services;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SchedulingController : ControllerBase
{
    public SchedulingController() { }

    [HttpGet("Get")]
    public ActionResult <List<int>> GetAll() => SchedulingService.GetAll();

    [HttpPut("Put")]
    public ActionResult <List<int>> UpDate(int id, int volunteerId)
    {
        if(id == null)
            return NotFound();
        SchedulingService.UpDate(id, volunteerId);
        return SchedulingService.GetAll();
    }

}
