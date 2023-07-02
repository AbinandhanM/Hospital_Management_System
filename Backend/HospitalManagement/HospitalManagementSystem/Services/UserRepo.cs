using HospitalManagementSystem.Context;
using HospitalManagementSystem.Interfaces;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Models.DTO;
using Microsoft.EntityFrameworkCore;

namespace HospitalManagementSystem.Services
{
    public class UserRepo : IRepo<int, User>
    {
        private readonly HospitalContext _context;
        private readonly ILogger<UserRepo> _logger;

        public UserRepo(HospitalContext context, ILogger<UserRepo> logger)
        {
            _context = context;
            _logger = logger;

        }
        public async Task<User?> Add(User item)
        {
            try
            {
                _context.Users.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while  adding user from the database");
            }
            return null;
        }

        public async Task<User?> Delete(int key)
        {
            try
            {
                var user = await Get(key);
                if (user != null)
                {
                    _context.Users.Remove(user);
                    await _context.SaveChangesAsync();
                    return user;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while deleting user from the database");
            }
            return null;
        }

        public async Task<User?> Get(int key)
        {
            try
            {
                var user = await _context.Users.FirstOrDefaultAsync(u => u.UserId == key);
                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching user from the database");
            }
            return null;
        }

        public async Task<ICollection<User>?> GetAll()
        {
            try
            {
                var users = await _context.Users.ToListAsync();
                if (users.Count > 0)
                    return users;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching users from the database");
            }
            return null;
        }

        public async Task<User?> Update(User item)
        {
            try
            {
                var user = await Get(item.UserId);
                if (user != null)
                {
                    user.Role = item.Role;
                    await _context.SaveChangesAsync();
                    return user;
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while updating users from the database");
            }
            return null;
        }

        public Task<User?> Update(UpdateStatusDTO item)
        {
            throw new NotImplementedException();
        }
    }
}

