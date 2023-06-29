using Microsoft.EntityFrameworkCore;
using System.Configuration;
using WebApplication1.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Configuration.Json;
namespace WebApplication1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddCors(opt => opt.AddPolicy("PolicyName", policy =>
            {
                policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
            }));

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
           
           builder.Services.AddDbContext<ProductContext>();    
            builder.Services.AddScoped<ProductContext>();   
            var app = builder.Build();

           // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            //app.UseStaticFiles();
            app.UseAuthorization();
            app.UseCors("PolicyName");


            app.MapControllers();

            app.Run();
        }
    }
}