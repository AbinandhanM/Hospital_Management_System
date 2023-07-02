using HospitalManagementSystem.Context;
using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace HospitalManagementSystem.Services
{
    public class PatientRepo:IRepo<int, Patient>
    {
        private readonly HospitalContext _context;
        private readonly ILogger<User> _logger;

        public PatientRepo(HospitalContext context, ILogger<User> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Patient?> Add(Patient item)
        {
            try
            {
                _context.Patients.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while  adding patient to the database");
            }
            return null;
        }

        public async Task<Patient?> Delete(int key)
        {
            try
            {
                var patient = await Get(key);
                if (patient != null)
                {
                    _context.Patients.Remove(patient);
                    await _context.SaveChangesAsync();
                    return patient;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while  Deleting patient from the database");
            }
            return null;
        }

        public async Task<Patient?> Get(int key)
        {
            try
            {
                var patient = await _context.Patients.FirstOrDefaultAsync(i => i.PatientId == key);
                return patient;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching  patient from the database");
            }
            return null;
        }

        public async Task<ICollection<Patient>?> GetAll()
        {
            try
            {
                var patient = await _context.Patients.Include(i => i.PatientId).ToListAsync();
                if (patient.Count > 0)
                    return patient;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching patient from the database");
            }
            return null;
        }

        public async Task<Patient?> Update(Patient item)
        {
            try
            {
                var patient = _context.Patients.FirstOrDefault(u => u.PatientId == item.PatientId);
                if (patient != null)
                {
                    patient.EmailId = item.EmailId ?? patient.EmailId;
                    patient.PhoneNumber = item.PhoneNumber ?? patient.PhoneNumber;

                    await _context.SaveChangesAsync();
                    return patient;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while updating patient from the database");
            }
            return null;

        }
    }
}
