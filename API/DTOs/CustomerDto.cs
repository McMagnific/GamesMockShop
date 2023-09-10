namespace API.DTOs
{
    public class CustomerDto
    {
        public int Id { get; set; }
        public string Username { get; set; } = null!; 
        public string Token { get; set; } = null!;
    }
}