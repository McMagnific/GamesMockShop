namespace API.Entities
{
    public class Customer
    {
        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public string Password { get; set; } = null!;

    }
}