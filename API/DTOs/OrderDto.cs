using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class OrderDto
    {


        [Required]
        public int CustomerId { get; set; }

        [Required]
        public int GameId { get; set; }
        public int Quantity { get; set; }


    }
}