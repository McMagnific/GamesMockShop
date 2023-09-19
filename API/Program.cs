using System.Text;
using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddCors();


builder.Services.AddDbContext<DataContext>(options =>
{
        options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddScoped<ITokenService, TokenService>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(
        options =>
        {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                        ValidateIssuerSigningKey = true,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["TokenKey"])),
                        ValidateIssuer = false,
                        ValidateAudience = false
                };
        }
);


var app = builder.Build();

app.UseCors(policybuilder => policybuilder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5000"));

app.UseAuthentication();

app.UseAuthorization();
app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

app.Run();
