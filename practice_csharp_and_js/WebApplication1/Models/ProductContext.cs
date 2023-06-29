using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1.Models
{
    public class ProductContext: Microsoft.EntityFrameworkCore.DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {
        }
        public Microsoft.EntityFrameworkCore.DbSet<Product> Products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(@"Data Source=DESKTOP-UT7PC9L;Initial Catalog=practice;Integrated Security=True;trustServerCertificate=true");
            //base.OnConfiguring(optionBuilder);
        }
        public override int SaveChanges()
        {
            return base.SaveChanges();
        }
    }
}
