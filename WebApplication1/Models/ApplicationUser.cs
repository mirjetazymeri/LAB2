using Microsoft.AspNetCore.Identity;
using Microsoft.Build.Framework;

namespace WebApplication1.Models
{
    public class ApplicationUser:IdentityUser
    {
        [Required]
        public string Name { get; set; }
        public string? StreetAddress { get; set; }   
        public string? City { get; set; }
        public int? Region { get; set; }
        public string? PostalCode { get; set; }
    }
}
