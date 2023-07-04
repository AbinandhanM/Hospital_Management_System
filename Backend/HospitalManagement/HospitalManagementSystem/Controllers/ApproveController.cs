using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models.DTO;
using HospitalManagementSystem.Services;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize(Roles="Admin")]
        [HttpPost]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> IApprove(UpdateStatusDTO item)
        {
            var result = await _service.Approval(item);
            if (result != null)
            {
                return Created("Home", result);
            }
            return BadRequest("Unable to Approve at this moment or Check DOctor ID  once");
        }
    }
}
