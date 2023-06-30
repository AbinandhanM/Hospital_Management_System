using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Services
{
    public class PasswordGenerateService : IPasswordGenerate
    {
        public async Task<string?> GeneratePassword(Admin admin)
        {
            string password = string.Empty;
            password = admin.Name.Substring(0, 5);
            password += string.Concat(admin.PhoneNumber.Where(char.IsDigit));

            return password;

        }
    }
}
