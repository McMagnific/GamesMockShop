using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class RegisterDto
    {

        [Required]
        public string Username { get; set; } = null!;

        [Required]
        public string Password { get; set; } = null!;

        [Required]
        public string Name { get; set; } = null!;

        [Required]
        public string Birthday { get; set; } = null!;

        [Required]
        public string Country { get; set; } = null!;

        [Required]
        public int Zipcode { get; set; }
        public string? Street { get; set; }
        public string? City { get; set; }
    }
}