namespace API.DTOs
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Birthday { get; set; } = null!;
        public string Username { get; set; } = null!;
        public string Country { get; set; } = null!;
        public int Zipcode { get; set; }
        public string? Street { get; set; }
        public string? City { get; set; }

    }
}