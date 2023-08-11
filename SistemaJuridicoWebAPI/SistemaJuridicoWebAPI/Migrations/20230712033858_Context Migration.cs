using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace SistemaJuridicoWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class ContextMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ACORDO",
                columns: table => new
                {
                    ID_ACORDO = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ID_USUARIO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_TENTATIVA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VALOR_TENTATIVA = table.Column<int>(type: "int", nullable: false),
                    CONDICOES_TENTATIVA = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ACORDO", x => x.ID_ACORDO);
                });

            migrationBuilder.CreateTable(
                name: "ANDAMENTO",
                columns: table => new
                {
                    ID_ANDAMENTO = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    ID_USUARIO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TIPO_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    INFO_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RESPONSAVEL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_CADASTRO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ANEXO = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ANDAMENTO", x => x.ID_ANDAMENTO);
                });

            migrationBuilder.CreateTable(
                name: "PARTE_CONTRARIA",
                columns: table => new
                {
                    ID_PARTECONTRARIA = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    PF_PJ = table.Column<int>(type: "int", nullable: false),
                    NOME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NOME_FANTASIA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CPF = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CNPJ = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RG = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ENDERECO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CEP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NUMERO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    COMPLEMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ESTADO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CIDADE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PAIS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OBSERVACAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CARGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_ADMISSAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_DEMISSAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ULTIMO_SALARIO = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PARTE_CONTRARIA", x => x.ID_PARTECONTRARIA);
                });

            migrationBuilder.CreateTable(
                name: "PROCESSO",
                columns: table => new
                {
                    ID_PROCESSO = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    NUMERO_PROCESSO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ID_USUARIO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    STATUS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TIPO_DE_ACAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AREA_DO_DIREITO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EMPPRESA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EMPRESA_CNPJ = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PROCESSO_ESTADO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PROCESSO_CIDADE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PROCESSO_PAIS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VARA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FORO_TRIBUNAL_ORGAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FASE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_DISTRIBUICAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_CITACAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PATRONO_RESPONSAVEL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PATRONOS_ANTERIORES = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TEXTO_DO_OBJETO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    VALOR_DO_PEDIDO = table.Column<int>(type: "int", nullable: false),
                    VALOR_INSTANCIA1 = table.Column<int>(type: "int", nullable: false),
                    VALOR_INSTANCIA2 = table.Column<int>(type: "int", nullable: false),
                    VALOR_INSTANCIA3 = table.Column<int>(type: "int", nullable: false),
                    VALOR_INSTANCIA_EXTRAORDINARIA = table.Column<int>(type: "int", nullable: false),
                    DATA_CADASTRO_PROCESSO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DATA_ULTIMO_ANDAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MOTIVO_ENCERRAMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MOTIVO_BAIXA_PROVISORIA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_NOME = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_NOME_FANTASIA = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_CPF = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_CNPJ = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_RG = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_ENDERECO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_CEP = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_NUMERO = table.Column<int>(type: "int", nullable: false),
                    PARTE_CONTRARIA_COMPLEMENTO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_ESTADO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_CIDADE = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_PAIS = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_OBSERVACAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_CARGO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_DATA_ADMISSAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_DATA_DEMISSAO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PARTE_CONTRARIA_ULTIMO_SALARIO = table.Column<int>(type: "int", nullable: false)
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
                    VALOR_ACORDO = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ID_PROCESSO = table.Column<string>(type: "nvarchar(max)", nullable: true),
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

            migrationBuilder.InsertData(
                table: "PROCESSO_STATUS",
                columns: new[] { "ID", "STATUS" },
                values: new object[,]
                {
                    { new Guid("232727c4-3af7-411c-8d72-643305fb2d57"), "Ativo" },
                    { new Guid("28345ac7-9514-4416-b195-78e5645bb95e"), "Encerrado" },
                    { new Guid("818c9240-d6f9-416f-946f-106ee0384fc0"), "Baixa Provisória" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ACORDO");

            migrationBuilder.DropTable(
                name: "ANDAMENTO");

            migrationBuilder.DropTable(
                name: "PARTE_CONTRARIA");

            migrationBuilder.DropTable(
                name: "PROCESSO");

            migrationBuilder.DropTable(
                name: "PROCESSO_ACORDO");

            migrationBuilder.DropTable(
                name: "PROCESSO_AMBITO");

            migrationBuilder.DropTable(
                name: "PROCESSO_AREA_DO_DIREITO");

            migrationBuilder.DropTable(
                name: "PROCESSO_FASE");

            migrationBuilder.DropTable(
                name: "PROCESSO_FORO_TRIBUNAL_ORGAO");

            migrationBuilder.DropTable(
                name: "PROCESSO_MOTIVO_DO_ENCERRAMENTO");

            migrationBuilder.DropTable(
                name: "PROCESSO_PATRONO_RESPONSAVEL");

            migrationBuilder.DropTable(
                name: "PROCESSO_STATUS");

            migrationBuilder.DropTable(
                name: "PROCESSO_TIPO_DE_ACAO");

            migrationBuilder.DropTable(
                name: "PROCESSO_VARA");

            migrationBuilder.DropTable(
                name: "USUARIO");
        }
    }
}
