using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTO;

namespace HospitalManagementSystem.Interfaces
{
    public interface IManageUser
    {
        public Task<UserDTO> Login(UserDTO user);
        public Task<UserDTO> PatientRegister(Patient patient);

        public Task<UserDTO> AdminRegister(Admin admin);

        public Task<UserDTO> DoctorRegister(Doctor doctor);

    }
}
