using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public GamesController(DataContext dataContext)
        {
            _dataContext = dataContext;

        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetGames()
        {
            var games = await _dataContext.Games.ToListAsync();
            return games;

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> GetGame(int id)
        {
            return await _dataContext.Games.FindAsync(id);

        }

    }
}
