using API.Data;
using API.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;
using API.DTOs;
using API.Interfaces;
using Microsoft.AspNetCore.Authorization;
using System.ComponentModel.DataAnnotations;

namespace API.Controllers
{

    public class CustomerController : BaseController
    {
        private readonly DataContext _dataContext;
        private readonly ITokenService _tokenService;

        public CustomerController(DataContext dataContext, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _dataContext = dataContext;

        }

        [HttpGet("user/{id}")]
        public async Task<ActionResult<UserDto>> GetuserById(int id)
        {
            var findUser = await _dataContext.Customers.FindAsync(id);

            UserDto user = new UserDto()
            {
                Id = findUser.Id,
                Name = findUser.Name,
                Username = findUser.Username,
                Birthday = findUser.Birthday,
                Country = findUser.Country,
                Zipcode = findUser.Zipcode,
                Street = findUser.Street,
                City = findUser.City
            };
            return Ok(user);

        }

        [HttpPost("register")]
        public async Task<ActionResult<CustomerDto>> RegisterCustomer(RegisterDto registerDto)
        {
            if (await DoesUserExist(registerDto.Username))
            {
                return BadRequest("Username does already exist");
            }

            using var hmac = new HMACSHA512();

            var customer = new Customer
            {
                Username = registerDto.Username,
                Name = registerDto.Name,
                Birthday = registerDto.Birthday.ToString(),
                Country = registerDto.Country,
                Zipcode = registerDto.Zipcode,
                Street = registerDto.Street,
                City = registerDto.City,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerDto.Password)),
                PasswordSalt = hmac.Key
            };
            _dataContext.Add(customer);
            await _dataContext.SaveChangesAsync();

            return Ok(new CustomerDto
            {
                Id = customer.Id,
                Username = customer.Username,
                Token = _tokenService.CreateToken(customer)

            });
        }

        [HttpPost("login")]
        public async Task<ActionResult<CustomerDto>> Login(LoginDto loginDto)
        {
            var customer = await _dataContext.Customers.FirstOrDefaultAsync(x => x.Username == loginDto.Username);

            if (customer == null) return Unauthorized("User not found");

            using var hmac = new HMACSHA512(customer.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != customer.PasswordHash[i]) return Unauthorized("Password is invalid");

            }

            return Ok(new CustomerDto
            {
                Id = customer.Id,
                Username = customer.Username,
                Token = _tokenService.CreateToken(customer)

            });
        }

        private async Task<bool> DoesUserExist(string username)
        {
            return await _dataContext.Customers.AnyAsync(x => x.Username.Equals(username));

        }
    }
}