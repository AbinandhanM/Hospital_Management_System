using HospitalManagementSystem.Context;
using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using System.Numerics;
using System.Threading.Tasks;

namespace HospitalManagementSystem.Services
{
    public class ApproveService : ICRUD
    {
        private readonly IRepo<int, Doctor> _doctorRepo;
        private readonly HospitalContext _context;

        public ApproveService(IRepo<int, Doctor> doctorRepo, HospitalContext context)
        {
            _doctorRepo = doctorRepo;
            _context = context;
        }

        public async Task<Doctor> Approval(int doctorId)
        {
            var doctor = await _doctorRepo.Get(doctorId);
            if (doctor != null)
            {
                doctor.Status = "Approved";
                await _doctorRepo.Update(doctor);
                await _context.SaveChangesAsync();
            }
            return doctor;
        }
    }
}
