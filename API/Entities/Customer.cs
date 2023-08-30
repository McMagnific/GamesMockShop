
namespace API.Entities
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Birthday { get; set; } = null!;
        public string Username { get; set; } = null!;
        public string Country { get; set; } = null!;
        public int Zipcode { get; set; }
        public string? Street { get; set; }
        public string? City { get; set; }
        public byte[] PasswordHash { get; set; } = null!;
        public byte[] PasswordSalt { get; set; } = null!;

    }
}