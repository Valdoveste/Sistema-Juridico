using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SistemaJuridicoWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class ContextMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PROCESSO",
                columns: table => new
                {
                    ID_PROCESSO = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NUMERO_PROCESSO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ID_USUARIO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TIPO_DE_ACAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AMBITO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AREA_DO_DIREITO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EMPRESA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EMPRESA_CNPJ = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ESTADO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CIDADE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PAIS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VARA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FORO_TRIBUNAL_ORGAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FASE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_DISTRIBUICAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_CITACAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PATRONO_RESPONSAVEL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PATRONOS_ANTERIORES = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TEXTO_DO_OBJETO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VALOR_DO_PEDIDO = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: false),
                    VALOR_INSTANCIA1 = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: false),
                    VALOR_INSTANCIA2 = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: false),
                    VALOR_INSTANCIA3 = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: false),
                    VALOR_INSTANCIA_EXTRAORDINARIA = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: false),
                    DATA_CADASTRO_PROCESSO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_ULTIMO_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MOTIVO_ENCERRAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MOTIVO_BAIXA_PROVISORIA = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO", x => x.ID_PROCESSO);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_ACORDO",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    DATA_ACORDO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VALOR_ACORDO = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: false),
                    ID_PROCESSO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CRIADOR_ACORDO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CONDICOES_TENTATIVA_DE_ACORDO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_ACORDO", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_AMBITO",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AMBITO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_AMBITO", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_ANDAMENTO",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TIPO_DE_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_CADASTRO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ID_PROCESSO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CRIADOR_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DESC_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_ANDAMENTO", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_AREA_DO_DIREITO",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    AREA_DO_DIREITO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_AREA_DO_DIREITO", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_EMPRESAS",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    EMPRESA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CPF_CNPJ = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_EMPRESAS", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_FASE",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FASE = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_FASE", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_FORO_TRIBUNAL_ORGAO",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    FORO_TRIBUNAL_ORGAO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_FORO_TRIBUNAL_ORGAO", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_MOTIVO_DO_ENCERRAMENTO",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    MOTIVO_DO_ENCERRAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_MOTIVO_DO_ENCERRAMENTO", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_PARTE_CONTRARIA",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PF_PJ = table.Column<int>(type: "int", nullable: true),
                    ID_PROCESSO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NOME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NOME_FANTASIA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CPF = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CNPJ = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RG = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ENDERECO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CEP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NUMERO = table.Column<int>(type: "int", nullable: false),
                    COMPLEMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ESTADO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CIDADE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PAIS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBSERVACAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CARGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_ADMISSAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_DEMISSAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ULTIMO_SALARIO = table.Column<decimal>(type: "numeric(18,2)", precision: 18, scale: 2, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_PARTE_CONTRARIA", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_PATRONO_RESPONSAVEL",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PATRONO_RESPONSAVEL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PATRONO_RESPONSAVEL_CPF_CNPJ = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_PATRONO_RESPONSAVEL", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_PATRONOS_ANTERIORES",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ID_PROCESSO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ID_USUARIO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NOME_USUARIO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PATRONO_RESPONSAVEL_ATUAL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PATRONO_RESPONSAVEL_CPF_CNPJ_ATUAL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_ALTERACAO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_PATRONOS_ANTERIORES", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_STATUS",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_STATUS", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_TIPO_DE_ACAO",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TIPO_DE_ACAO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_TIPO_DE_ACAO", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_TIPO_DE_ANDAMENTO",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    TIPO_DE_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_TIPO_DE_ANDAMENTO", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO_VARA",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    VARA = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PROCESSO_VARA", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "USUARIO",
                columns: table => new
                {
                    ID_USUARIO = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NOME_USUARIO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SENHA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ACESSO_GESTAO = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_USUARIO", x => x.ID_USUARIO);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PROCESSO");

            migrationBuilder.DropTable(
                name: "PROCESSO_ACORDO");

            migrationBuilder.DropTable(
                name: "PROCESSO_AMBITO");

            migrationBuilder.DropTable(
                name: "PROCESSO_ANDAMENTO");

            migrationBuilder.DropTable(
                name: "PROCESSO_AREA_DO_DIREITO");

            migrationBuilder.DropTable(
                name: "PROCESSO_EMPRESAS");

            migrationBuilder.DropTable(
                name: "PROCESSO_FASE");

            migrationBuilder.DropTable(
                name: "PROCESSO_FORO_TRIBUNAL_ORGAO");

            migrationBuilder.DropTable(
                name: "PROCESSO_MOTIVO_DO_ENCERRAMENTO");

            migrationBuilder.DropTable(
                name: "PROCESSO_PARTE_CONTRARIA");

            migrationBuilder.DropTable(
                name: "PROCESSO_PATRONO_RESPONSAVEL");

            migrationBuilder.DropTable(
                name: "PROCESSO_PATRONOS_ANTERIORES");

            migrationBuilder.DropTable(
                name: "PROCESSO_STATUS");

            migrationBuilder.DropTable(
                name: "PROCESSO_TIPO_DE_ACAO");

            migrationBuilder.DropTable(
                name: "PROCESSO_TIPO_DE_ANDAMENTO");

            migrationBuilder.DropTable(
                name: "PROCESSO_VARA");

            migrationBuilder.DropTable(
                name: "USUARIO");
        }
    }
}
