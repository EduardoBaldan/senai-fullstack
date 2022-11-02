using Microsoft.EntityFrameworkCore;
using ExoAPI.Models;

namespace ExoAPI.Contexts
{
    public class dbExoAPIContext: DbContext
    {
        public dbExoAPIContext()
        {
        }
        public dbExoAPIContext(DbContextOptions<dbExoAPIContext>options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source = NOTEEDUARDOSONY\\SQLEXPRESS; initial catalog = dbExoAPI; User Id = sa; Password = 1234");
            }
        }

        public DbSet<Projeto> Projetos { get; set; }

    }
}
