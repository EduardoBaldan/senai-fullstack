using Chapter.Models;
using Microsoft.EntityFrameworkCore;

namespace Chapter.Contexts
{
    public class ChapterContext: DbContext
    {
        public ChapterContext()
        {
        }
        public ChapterContext(DbContextOptions<ChapterContext> options) : base(options)
        {
        }
        //vamos utilizar esse metodo para configurar o banco de dados
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured) 
            {
                //cada probedor tem sua sintaxe para especificação
                optionsBuilder.UseSqlServer("Data Source = NOTEEDUARDOSONY\\SQLEXPRESS; initial catalog = Chapter; intergrated Security = true");
            }
        }

        //Dbset representa as entdades que serao utilizas nas operaçoes de leitura, criação, atualização e exclusão
        public DbSet<Livro> Livros { get; set; }

    }
}
