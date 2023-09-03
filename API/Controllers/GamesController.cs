using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class GamesController : BaseController
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
            return Ok(games);

        }

        [HttpGet("product/{id}")]
        public async Task<ActionResult<Game>> GetGame(int id)
        {
            var game = await _dataContext.Games.FindAsync(id);
            return game == null ? NotFound() : Ok(game);

        }

        [HttpGet("category/{genre}")]
        public async Task<ActionResult<IEnumerable<Game>>> GetGamesByGenre(string genre)
        {
            // var games = await _dataContext.Games.ToListAsync();
            var games = await _dataContext.Games.Where(games => games.Genre.Contains(genre)).ToListAsync();
            return games;

        }
    }
}
