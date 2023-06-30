using HospitalManagementSystem.Context;
using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTO;
using HospitalManagementSystem.Services;

namespace HospitalManagementSystem.Interfaces
{
    public interface IManageUser
    {
        public Task<UserDTO> Login(UserDTO user);
        public Task<UserDTO> PatientRegister(PatientRegisterDTO patient);

        public Task<UserDTO> AdminRegister(AdminRegisterDTO admin);

        public Task<UserDTO> DoctorRegister(DoctorRegisterDTO doctor);

    }
}


