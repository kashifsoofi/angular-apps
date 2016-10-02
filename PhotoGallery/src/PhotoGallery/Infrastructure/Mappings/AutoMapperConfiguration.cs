using AutoMapper;
using Microsoft.Extensions.DependencyInjection;

namespace PhotoGallery.Infrastructure.Mappings
{
    public class AutoMapperConfiguration
    {
        public static void Configure(IServiceCollection services)
        {
            var mapperConfiguration = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new DomainToViewModelMappingProfile());
            });

            var mapper = mapperConfiguration.CreateMapper();
            services.AddSingleton<IMapper>(mapper);
        }
    }
}
