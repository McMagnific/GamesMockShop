using API.Data;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class OrderController : BaseController
    {
        private readonly DataContext _dataContext;

        public OrderController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpGet("getcart/{id}")]
        public async Task<ActionResult<CartDto>> GetCart(int id)
        {
            var cart = await _dataContext.Carts.Where(x => x.CustomerId == id).ToListAsync();
            return cart == null ? NotFound() : Ok(cart);

        }

        [HttpPost("addtocart")]
        public async Task<ActionResult<CartDto>> AddToCart(OrderDto orderDto)
        {
            var cart = new Cart
            {
                CustomerId = orderDto.CustomerId,
                GameId = orderDto.GameId,
                Quantity = orderDto.Quantity,

            };

            _dataContext.Carts.Add(cart);
            await _dataContext.SaveChangesAsync();

            return Ok(orderDto);

        }

    }
}