﻿using HospitalManagementSystem.Interfaces;
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

            public DoctorAndAdminController( IRepo<int, Doctor> doctorRepo)
            {
               
                _doctorRepo = doctorRepo;
            }


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