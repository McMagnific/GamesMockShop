using System.ComponentModel.DataAnnotations;

namespace API.Entities
{
    public class Customer
    {
        public int Id { get; set; }

        public string Username { get; set; } = null!;
        public byte[] PasswordHash { get; set; } = null!;
        public byte[] PasswordSalt { get; set; } = null!;

    }
}