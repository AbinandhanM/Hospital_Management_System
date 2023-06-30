using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using System.Diagnostics;

namespace HospitalManagementSystem.Services
{
    public class PasswordGenerateService : IPasswordGenerate
    {
        public async Task<string?> GeneratePassword(Admin admin)
        {
            string password = string.Empty;
            password = admin.Name.Substring(0, 5);
            password = admin.PhoneNumber;
            return password;

        }
    }
}
