using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Order
    {
        public int Id { get; set; }

        public int CustomerId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }

        [Column(TypeName = "decimal(6,2)")]
        public decimal Price { get; set; }
    }
}