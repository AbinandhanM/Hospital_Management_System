using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTO;
using HospitalManagementSystem.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HospitalController : ControllerBase
    {
        private readonly IManageUser _manageUser;
     

        public HospitalController(IManageUser manageUser)
        {
            _manageUser = manageUser;
            
        }

        [HttpPost]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> DoctorRegister(DoctorRegisterDTO doctor)
        {
            var result = await _manageUser.DoctorRegister(doctor);
            if (result != null)
            {
                return Created("Home", result);
            }
            return BadRequest("Unable to register at this moment");
        }

        [HttpPost]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> AdminRegister(AdminRegisterDTO admin)
        {
            var result = await _manageUser.AdminRegister(admin);
            if (result != null)
            {
                return Created("Home", result);
            }
            return BadRequest("Unable to register at this moment");
        }

        [HttpPost]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> PatientRegister(PatientRegisterDTO patient)
        {
            var result = await _manageUser.PatientRegister(patient);
            if (result != null)
            {
                return Created("Home", result);
            }
            return BadRequest("Unable to register at this moment");
        }

           [HttpPost]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> Login([FromBody] UserDTO userDTO)
        {
            var user = await _manageUser.Login(userDTO);
            if (user == null)
            {
                return BadRequest("invalid username or password");
            }
            return Ok(user);
        }
    }
}
