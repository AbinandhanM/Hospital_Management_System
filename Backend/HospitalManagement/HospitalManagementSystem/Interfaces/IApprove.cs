using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Interfaces
{
    public interface IApprove
    {
        public Task<Doctor> Approval(int DoctorId);
    }
}
