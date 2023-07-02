using HospitalManagementSystem.Context;
using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTO;
using System.Numerics;
using System.Threading.Tasks;

namespace HospitalManagementSystem.Services
{
    public class ApproveService : ICRUD
    {
        private readonly IRepo<int, Doctor> _doctorRepo;
    

        public ApproveService(IRepo<int, Doctor> doctorRepo)
        {
            _doctorRepo = doctorRepo;
        
        }

   

        public Task<Doctor> Approval(UpdateStatusDTO updateStatus)
        {
            return _doctorRepo.Update(updateStatus);
        }
    }
}
