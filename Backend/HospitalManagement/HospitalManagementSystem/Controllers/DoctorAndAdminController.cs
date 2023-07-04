using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models.DTO;
using HospitalManagementSystem.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("AngularCORS")]
    public class DoctorAndAdminController : ControllerBase
    {
          
            private readonly IRepo<int, Doctor> _doctorRepo;
        private readonly IRepo<int,Patient> _patientRepo;
        private readonly IRepo<int, Admin> _adminRepo;

            public DoctorAndAdminController( IRepo<int, Doctor> doctorRepo,IRepo<int,Patient> patientRepo,IRepo<int,Admin>adminRepo)
            {
               
                _doctorRepo = doctorRepo;
            _patientRepo = patientRepo;
            _adminRepo = adminRepo;
            }

        [Authorize(Roles = "Admin")]
        [HttpGet]
        [ProducesResponseType(typeof(ActionResult<UserDTO>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<UserDTO>> GetAllDoctors()
        {
            try
            {
                var doctors = await _doctorRepo.GetAll();

                if (doctors != null)
                    return Ok(doctors);

                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest("An error occurred while retrieving the doctors.");
            }
        }

        //[Authorize(Roles = "Doctor")]
        [HttpPut]
            [ProducesResponseType(typeof(Doctor), StatusCodes.Status200OK)]
            [ProducesResponseType(StatusCodes.Status400BadRequest)]
            public async Task<ActionResult<Doctor>> UpdateDoctorDetails(int doctorID, Doctor doctor)
            {
                var existingDoctor = await _doctorRepo.Get(doctorID);
                if (existingDoctor == null)
                {
                    return NotFound();
                }
                existingDoctor.Name = doctor.Name;
                existingDoctor.DateOfBirth = doctor.DateOfBirth;
                existingDoctor.PhoneNumber = doctor.PhoneNumber;
                existingDoctor.EmailId = doctor.EmailId;
                existingDoctor.Specialization = doctor.Specialization;
                existingDoctor.Status = doctor.Status;
                existingDoctor.Specialization = doctor.Specialization;
                existingDoctor.Experience = doctor.Experience;

                var updatedDoctor = await _doctorRepo.Update(existingDoctor);
                if (updatedDoctor != null)
                {
                    return Ok(updatedDoctor);
                }

                return BadRequest("Unable to update the doctor");
            }


            [HttpGet("GetById")]
            [ProducesResponseType(typeof(ActionResult<Doctor>), StatusCodes.Status200OK)]
            [ProducesResponseType(StatusCodes.Status400BadRequest)]
            public async Task<ActionResult<Doctor>> GetDoctorById(int doctorID)
            {
                var doctor = await _doctorRepo.Get(doctorID);
                try
                {
                    if (doctor != null)
                        return Ok(doctor);
                    return NotFound();
                }
                catch (Exception ex)
                {
                    return BadRequest("Not able to get doctor detail based on ID");
                }
            }

        [HttpGet("GetPatientById")]
        [ProducesResponseType(typeof(ActionResult<Patient>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Patient>> GetPatientById(int patientId)
        {
            try
            {
                var patient = await _patientRepo.Get(patientId);
                if (patient != null)
                {
                    return Ok(patient);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
             
                return BadRequest("Not able to get patient details based on ID");
            }
        }


        [HttpGet("GetAdminById")]
        [ProducesResponseType(typeof(ActionResult<Admin>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Admin>> GetAdminById(int adminId)
        {
            try
            {
                var admin = await _adminRepo.Get(adminId);
                if (admin != null)
                {
                    return Ok(admin);
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {

                return BadRequest("Not able to get Admin details based on ID");
            }
        }

       [Authorize(Roles = "Admin")]
        [HttpDelete]
            [ProducesResponseType(typeof(ActionResult<Doctor>), StatusCodes.Status200OK)]
            [ProducesResponseType(StatusCodes.Status400BadRequest)]

            public async Task<ActionResult<Doctor>> DeleteDoctor(int doctorID)
            {
                var doctor = await _doctorRepo.Delete(doctorID);
                try
                {
                    if (doctor != null)
                        return Ok("Doctor details deleted successfully");
                    return NotFound();
                }
                catch (Exception ex)
                {
                    return BadRequest("Not able to delete doctor details");
                }
            }

        }
    }
