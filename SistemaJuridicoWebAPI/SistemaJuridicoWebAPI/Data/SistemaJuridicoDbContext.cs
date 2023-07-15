using Microsoft.EntityFrameworkCore;
using SistemaJuridicoWebAPI.Models;

namespace SistemaJuridicoWebAPI.Data
{
  public class SistemaJuridicoDbContext : DbContext
  {
    public SistemaJuridicoDbContext(DbContextOptions options) : base(options) { }

    public DbSet<PROCESSO> PROCESSO { get; set; }
    public DbSet<ANDAMENTO> ANDAMENTO { get; set; }
    public DbSet<ACORDO> ACORDO { get; set; }
    public DbSet<USUARIO> USUARIO { get; set; }
    public DbSet<PARTE_CONTRARIA> PARTE_CONTRARIA { get; set; }
    public DbSet<PROCESSO_AMBITO> PROCESSO_AMBITO { get; set; }
    public DbSet<PROCESSO_AREA_DO_DIREITO> PROCESSO_AREA_DO_DIREITO { get; set; }
    public DbSet<PROCESSO_ACORDO> PROCESSO_ACORDO { get; set; }
    public DbSet<PROCESSO_FASE> PROCESSO_FASE { get; set; }

    public DbSet<PROCESSO_TIPO_DE_ANDAMENTO> PROCESSO_TIPO_DE_ANDAMENTO { get; set; }
    public DbSet<PROCESSO_ANDAMENTO> PROCESSO_ANDAMENTO { get; set; }
    public DbSet<PROCESSO_FORO_TRIBUNAL_ORGAO> PROCESSO_FORO_TRIBUNAL_ORGAO { get; set; }
    public DbSet<PROCESSO_MOTIVO_DO_ENCERRAMENTO> PROCESSO_MOTIVO_DO_ENCERRAMENTO { get; set; }
    public DbSet<PROCESSO_PATRONO_RESPONSAVEL> PROCESSO_PATRONO_RESPONSAVEL { get; set; }
    public DbSet<PROCESSO_STATUS> PROCESSO_STATUS { get; set; }
    public DbSet<PROCESSO_TIPO_DE_ACAO> PROCESSO_TIPO_DE_ACAO { get; set; }
    public DbSet<PROCESSO_VARA> PROCESSO_VARA { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<PROCESSO_STATUS>()
        .Property(c => c.ID)
        .ValueGeneratedOnAdd();

      modelBuilder.Entity<PROCESSO_STATUS>()
        .HasData(
            new PROCESSO_STATUS { ID = Guid.NewGuid(), STATUS = "Ativo" },
            new PROCESSO_STATUS { ID = Guid.NewGuid(), STATUS = "Baixa Provisória" },
            new PROCESSO_STATUS { ID = Guid.NewGuid(), STATUS = "Encerrado" }
         );


    }

  }
}
