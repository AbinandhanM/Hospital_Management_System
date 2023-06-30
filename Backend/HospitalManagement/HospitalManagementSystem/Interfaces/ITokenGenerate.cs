using HospitalManagementSystem.Models.DTO;

namespace HospitalManagementSystem.Interfaces
{
    public interface ITokenGenerate
    {
        public string GenerateToken(UserDTO user);
    }
}
