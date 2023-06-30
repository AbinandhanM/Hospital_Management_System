using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Interfaces
{
    public interface IPasswordGenerate
    {
        public Task<string?> GeneratePassword(Admin admin);
    }
}
