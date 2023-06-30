using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models.DTO;
using HospitalManagementSystem.Services;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("AngularCORS")]
    public class ApproveController : ControllerBase
    {
        private ICRUD _service;

        public ApproveController(ICRUD service)
        {
            _service = service;
        }

        [HttpPost]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> IApprove(int doctorid)
        {
            var result = await _service.Approval(doctorid);
            if (result != null)
            {
                return Created("Home", result);
            }
            return BadRequest("Unable to Approve at this moment");
        }
    }
}
