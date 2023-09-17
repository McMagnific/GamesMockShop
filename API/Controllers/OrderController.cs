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
        public async Task<ActionResult<Cart>> GetCart(int id)
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

        [HttpDelete("removecartrecord/{id}")]
        public async Task<ActionResult<CartDto>> RemoveCartRecord(int id)
        {

            var removableRecord = _dataContext.Carts.Remove(_dataContext.Carts.Find(id));

            if (removableRecord == null) return NoContent();

            await _dataContext.SaveChangesAsync();

            return Accepted();

        }
        [HttpDelete("removecart/{id}")]
        public async Task<ActionResult> RemoveCart(int id)
        {

            var removableRecord = _dataContext.Carts.Where(x => x.CustomerId == id);

            _dataContext.Carts.RemoveRange(removableRecord);

            if (removableRecord == null) return NoContent();

            await _dataContext.SaveChangesAsync();

            return Accepted();

        }
    }
}