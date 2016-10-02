using PhotoGallery.Entities;
using PhotoGallery.Infrastructure.Core;
using System.Collections.Generic;

namespace PhotoGallery.Infrastructure.Services.Interfaces
{
    public interface IMembershipService
    {
        MembershipContext ValidateUser(string username, string password);
        User CreateUser(string username, string email, string password, int[] roles);
        User GetUser(int userId);
        List<Role> GetUserRoles(string username);
    }
}
