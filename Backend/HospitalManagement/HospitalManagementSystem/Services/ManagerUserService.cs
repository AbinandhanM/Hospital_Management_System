using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTO;
using System.Collections.ObjectModel;
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

        public ManagerUserService(IRepo<int, Doctor> doctor,
            IRepo<int, User> user,
            IRepo<int, Patient>patient ,
            IRepo<int, Admin>  admin,
            ITokenGenerate tokenService,
            IPasswordGenerate passwordService)
        {
            _doctorRepo = doctor;
            _userRepo = user;
            _adminRepo = admin;
            _patientRepo = patient;
            _passwordService = passwordService;
            _tokenService = tokenService;
        }
         
        public async Task<UserDTO> AdminRegister(AdminRegisterDTO admin)
        {
            UserDTO user = null;
            var hmac = new HMACSHA512();
            string generatedPassword = await _passwordService.GeneratePassword(admin);
            admin.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword));
            admin.User.PasswordKey = hmac.Key;
            admin.User.Role = "Admin";
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
            UserDTO myUser = null;
            var hmac = new HMACSHA512();
            doctor.Users = new User();
            doctor.Users.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(doctor.PasswordClear ?? "1234"));
            doctor.Users.PasswordKey = hmac.Key;
            doctor.Users.Role = "Doctor";
            doctor.Status = "UnApproved";
         
            var userResult = await _userRepo.Add(doctor.Users);
            var doctorResult = await _doctorRepo.Add(doctor);
            if (userResult != null && doctorResult != null)
            {
                myUser = new UserDTO();
                myUser.UserId = doctorResult.DoctorId;
                myUser.Role = userResult.Role;
                myUser.Token = _tokenService.GenerateToken(myUser);
            }
            return myUser;
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
            //patient.Users = new User();
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
 