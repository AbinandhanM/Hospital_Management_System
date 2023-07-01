using HospitalManagementSystem.Context;
using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace HospitalManagementSystem.Services
{
    public class DoctorRepo : IRepo<int, Doctor>
    {
        private readonly HospitalContext _context;
        private readonly ILogger<User> _logger;

        public DoctorRepo(HospitalContext context, ILogger<User> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Doctor?> Add(Doctor item)
        {
            try
            {
                _context.Doctors.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                  _logger.LogError(ex, "An error occurred while adding doctors to the database");
            }
            return null;
        }

        public async Task<Doctor?> Delete(int key)
        {
            try
            {
                var doctor = await Get(key);
                if (doctor != null)
                {
                    _context.Doctors.Remove(doctor);
                    await _context.SaveChangesAsync();
                    return doctor;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while deleting doctors from the database");
            }
            return null;
        }

        public async Task<Doctor?> Get(int key)
        {
            try
            {
                var doctor = await _context.Doctors.Include(d=>d.Users).FirstOrDefaultAsync(i => i.DoctorId == key);
                return doctor;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching doctors from the database");
            }
            return null;
        }

        public async Task<ICollection<Doctor>?> GetAll()
        {
            try
            {
                var doctor = await _context.Doctors.ToListAsync();
                if (doctor.Count > 0)
                    return doctor;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching doctors from the database");
            }
            return null;

        }

        public async Task<Doctor?> Update(Doctor item)
        {
            try
            {
                var doctor = _context.Doctors.FirstOrDefault(u => u.DoctorId == item.DoctorId);
                if (doctor != null)
                {
                    doctor.Status = item.Status ?? doctor.Status;
                    doctor.EmailId = item.EmailId ?? doctor.EmailId;
                    doctor.Specialization = item.Specialization ?? doctor.Specialization;
                    doctor.Experience = item.Experience ?? doctor.Experience;
                    await _context.SaveChangesAsync();
                    return doctor;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while updating doctors to the database");
            }
            return null;

        }
    }
}
