using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Interfaces
{
    public interface ICRUD
    {
        public Task<Doctor> Approval(int DoctorId);
    }
}
