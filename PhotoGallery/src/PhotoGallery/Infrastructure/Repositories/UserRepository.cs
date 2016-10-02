using PhotoGallery.Entities;
using PhotoGallery.Infrastructure.Repositories.Interfaces;
using System.Collections;
using System.Collections.Generic;

namespace PhotoGallery.Infrastructure.Repositories
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        private readonly IRoleRepository roleRepository;

        public UserRepository(PhotoGalleryContext context, IRoleRepository roleRepository)
            : base(context)
        {
            this.roleRepository = roleRepository;
        }

        public User GetSingleByUsername(string username)
        {
            return this.GetSingle(x => x.Username == username);
        }

        public IEnumerable<Role> GetUserRoles(string username)
        {
            List<Role> roles = null;

            User user = this.GetSingle(x => x.Username == username, x => x.UserRoles);
            if (user != null)
            {
                roles = new List<Role>();
                foreach (var userRole in user.UserRoles)
                {
                    roles.Add(roleRepository.GetSingle(userRole.RoleId));
                }
            }

            return roles;
        }
    }
}
