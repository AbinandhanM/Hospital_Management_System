using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTO;

namespace HospitalManagementSystem.Interfaces
{
    public interface ICRUD
    {
        public Task<Doctor> Approval(UpdateStatusDTO updateStatus);
    }
}
