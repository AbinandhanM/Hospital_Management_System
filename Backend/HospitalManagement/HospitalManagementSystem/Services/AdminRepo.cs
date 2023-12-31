﻿using HospitalManagementSystem.Context;
using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTO;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace HospitalManagementSystem.Services
{
    public class AdminRepo : IRepo<int, Admin>
    {
        private readonly HospitalContext _context;
        private readonly ILogger<UserRepo> _logger;
       

        public AdminRepo(HospitalContext hospitalContext, ILogger<UserRepo> logger)
        {
            _context = hospitalContext;
            _logger = logger;

        }


        public async Task<Admin?> Add(Admin item)
        {
            try
            {
                _context.Admins.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching adding admin from the database");
            }
            return null;
        }

        public Task<Admin?> Delete(int key)
        {
            throw new NotImplementedException();
        }

        public async Task<Admin?> Get(int key)
        {
            try
            {
                var user = await _context.Admins.FirstOrDefaultAsync(u => u.AdminId == key);
                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching  admin from the database");
            }
            return null;
        }

        public async Task<ICollection<Admin>?> GetAll()
        {
            try
            {
                var users = await _context.Admins.ToListAsync();
                if (users.Count > 0)
                    return users;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching  admin from the database");
            }
            return null;
        }

        public Task<Admin?> Update(Admin item)
        {
            throw new NotImplementedException();
        }

        public Task<Admin?> Update(UpdateStatusDTO item)
        {
            throw new NotImplementedException();
        }
    }
}
