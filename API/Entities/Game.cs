using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    public class Game
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string? Description { get; set; }
        public string? Genre { get; set; }

        [Column(TypeName = "decimal(6,2)")]
        public decimal Price { get; set; }
        public string? Image_link { get; set; }


    }
}