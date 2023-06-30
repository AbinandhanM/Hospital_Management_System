using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTO;
using System.Security.Cryptography;
using System.Text;

namespace HospitalManagementSystem.Services
{
    public class ManagerUserService : IManageUser
    {
        private readonly IRepo<int, User> _userRepo;
        private readonly IRepo<int, Admin> _adminRepo;
        private readonly IRepo<int, Patient> _patientRepo;
        private readonly IRepo<int, Doctor> _doctorRepo;
        private readonly IPasswordGenerate  _passwordService;
        private readonly ITokenGenerate _tokenService;


        public async Task<UserDTO> AdminRegister(AdminRegisterDTO admin)
        {
            UserDTO user = null;
            var hmac = new HMACSHA512();
            string generatedPassword = await _passwordService.GeneratePassword(admin);
            admin.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword));
            admin.User.PasswordKey = hmac.Key;
            admin.User.Role = "Intern";
            admin.PasswordStatus = "Not Changed";
            var userResult = await _userRepo.Add(admin.User);
            var internResult = await _adminRepo.Add(admin);
            if (userResult != null && internResult != null)
            {
                user = new UserDTO();
                user.UserId = internResult.AdminId;
                user.Role = userResult.Role;
                user.Token = _tokenService.GenerateToken(user);
            }
            return user;
        }

        public async Task<UserDTO> DoctorRegister(DoctorRegisterDTO doctor)
        {
            UserDTO? user = null;
            var hmac = new HMACSHA512();
            doctor.Users = new User();
            doctor.Users.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(doctor.PasswordClear));
            doctor.Users.PasswordKey = hmac.Key;
            doctor.Users.Role = "Doctor";
            var userResult = await _userRepo.Add(doctor.Users);

            var patientResult = await _doctorRepo.Add(doctor);
            if (userResult != null && patientResult != null)
            {
                user = new UserDTO();
                user.UserId = patientResult.DoctorId;
                user.Role = userResult.Role;
                user.Token = _tokenService.GenerateToken(user);
            }
            return user;
        }

        public async Task<UserDTO> Login(UserDTO user)
        {
            var userData = await _userRepo.Get(user.UserId);
            if (userData != null)
            {
                var hmac = new HMACSHA512(userData.PasswordKey);
                var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userPass[i] != userData.PasswordHash[i])
                        return null;
                }
                user = new UserDTO();
                user.UserId = userData.UserId;
                user.Role = userData.Role;
                user.Token = _tokenService.GenerateToken(user);
            }
            return user;
        }

        public  async Task<UserDTO> PatientRegister(PatientRegisterDTO patient)
        {
            UserDTO? user = null;
            var hmac = new HMACSHA512();
            patient.Users = new User();
            patient.Users.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(patient.PasswordClear));
            patient.Users.PasswordKey = hmac.Key;
            patient.Users.Role = "Patient";
            var userResult = await _userRepo.Add(patient.Users);

            var patientResult = await _patientRepo.Add(patient);
            if (userResult != null && patientResult != null)
            {
                user = new UserDTO();
                user.UserId = patientResult.PatientId;
                user.Role = userResult.Role;               
                user.Token = _tokenService.GenerateToken(user);
            }
            return user;

        }
    }
}
 