namespace API.Entities
{
    public class Cart
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public int GameId { get; set; }
        public Game Game { get; set; }
        public int Quantity { get; set; }

    }
}