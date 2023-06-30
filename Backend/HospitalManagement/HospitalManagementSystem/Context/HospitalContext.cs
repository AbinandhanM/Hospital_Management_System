using HospitalManagementSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace HospitalManagementSystem.Context
{
    public class HospitalContext : DbContext
    {
        public HospitalContext(DbContextOptions options) : base(options) 
        { 

        }

        public DbSet<User> Users { get; set; }

        public DbSet<Patient> Patients { get; set; }

        public DbSet<Doctor> Doctors { get; set; }

        public DbSet<Admin> Admins { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>().Property(i => i.PatientId).ValueGeneratedNever();
            modelBuilder.Entity<Doctor>().Property(i => i.DoctorId).ValueGeneratedNever();
            modelBuilder.Entity<Admin>().Property(i => i.AdminId).ValueGeneratedNever();
           ;
        }

    }
    
}
